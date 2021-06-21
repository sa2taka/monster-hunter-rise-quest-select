<template>
  <div id="result" class="result disappear">
    <div class="quest quest-disappear">
      <div class="subtitle">クエスト</div>
      <div class="quest-info">
        <span class="quest-name">{{ result.quest.name }}</span>
        <span class="central-line animation-line" />
        <span class="quest-addition-info-wrapper">
          <span class="quest-additional-info">
            {{ result.quest.type }}
            <span
              v-for="i in result.quest.level"
              :key="i"
              class="star"
              :data-star="i"
              >★
            </span>
          </span>
        </span>
      </div>
      <div class="monsters">
        <div
          v-for="monster in result.quest.monsters"
          :key="monster.name"
          class="monster"
        >
          <img
            class="monster-img"
            :src="`/monster-hunter-rise-quest-select/monsters/${monster.image}`"
          />
          <span class="monster-name">{{ monster.name }}</span>
        </div>
      </div>
    </div>
    <div class="weapon weapon-disappear">
      <div class="subtitle">武器種</div>
      <div class="weapon-info">
        <img class="weapom-img" :src="weaponImage" />
        <span class="weapon-name">{{ result.weapon.name }}</span>
      </div>
    </div>
    <div class="time time-disappear">
      <div class="subtitle">制限時間</div>
      <div class="deadline">
        <span class="deadline-info">
          <span class="deadline-minuts">{{ targetTime }}</span>
          分
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  PropType,
  onMounted,
  onUpdated,
  ref,
} from 'vue';

import { Result } from '../types/result';

export default defineComponent({
  name: 'SelectedResult',
  props: {
    result: {
      type: Object as PropType<Result>,
      required: true,
    },
  },
  setup: (props) => {
    const appearQuest = ref(false);
    const targetTime = computed(() => {
      const orgTime = props.result.quest.level + 4;
      const additionalTime = props.result.quest.monsters.some(
        (monster) => monster.apex || monster.old
      )
        ? 5
        : 0;
      const targetCountTime = Math.floor(
        (props.result.quest.monsters.length - 1) * 0.8 * orgTime
      );
      const range = orgTime;
      const questAdditionalTome = props.result.quest.type === '高難度' ? 4 : 0;
      return (
        orgTime +
        additionalTime +
        targetCountTime +
        questAdditionalTome +
        Math.floor(range * Math.random())
      );
    });

    const weaponImage = computed(
      () =>
        `/monster-hunter-rise-quest-select/weapons/${props.result.weapon.image}`
    );

    onMounted(() => {
      location.hash = '';
      location.hash = 'result';
      setTimeout(() => (appearQuest.value = true), 1000);
    });

    onUpdated(() => {
      location.hash = '';
      location.hash = 'result';
    });

    const sleep = (milliseconds: number, someFunction: () => void) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(someFunction());
        }, milliseconds);
      });
    };
    // アニメーション
    onMounted(() => {
      const result = document.getElementById('result')!;
      const quest = result.querySelector('.quest')!;
      const weapon = result.querySelector('.weapon')!;

      sleep(1000, () => {
        result.classList.add('appear');
        result.classList.remove('disappear');
        quest.classList.add('quest-appear');
        quest.classList.remove('quest-disappear');
      });
    });

    return {
      targetTime,
      weaponImage,
    };
  },
});
</script>

<style>
.result {
  display: flex;
  flex-flow: column;
}
.subtitle {
  font-size: 1.2em;
  color: #242424;
}

.weapon,
.quest-info,
.monsters,
.quest {
  display: flex;
  align-items: center;
  position: relative;
}

.quest-info,
.quest,
.weapon {
  flex-direction: column;
}

.weapon {
  margin: 1.4em 0;
}

.weapon-info,
.monster {
  display: flex;
  flex-flow: column;
  font-size: 1.2em;
  font-weight: 600;
  align-items: center;
}

.monster {
  margin: 0.2em 0.8em;
}

.weapom-img,
.monster-img {
  width: 64px;
  height: 64px;
}

.quest-name {
  font-family: 'Shippori Mincho', serif;
  font-size: 48px;
}

.quest-additional-info {
  font-size: 24px;
  margin: 0.4em 0 1em;
}

.time {
  margin: 1.2em 0;
}

.deadline-minuts {
  font-size: 24px;
  font-weight: 600;
}

/* animation */
.quest-addition-info-wrapper {
  overflow: hidden;
  position: relative;
}
.quest-disappear .quest-additional-info {
  position: relative;
  transform: translateY(-2em);
}

.quest-additional-info {
  display: block;
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
}
.central-line {
  width: 100%;
  position: relative;
}

.animation-line::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  content: '';
  height: 1px;
  width: 0;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  background-color: black;
}

.quest-appear .animation-line::after {
  animation-name: central-line-keyframe;
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes central-line-keyframe {
  0% {
    transform: translate(-50%, 0);
    width: 0%;
  }
  15% {
    transform: translate(-50%, 0);
    width: 100%;
  }

  60% {
    transform: translate(-50%, 0);
  }

  70% {
    transform: translate(-50%, -64px);
  }

  85% {
    transform: translate(-50%, -64px);
    width: 100%;
  }

  100% {
    transform: translate(-50%, -64px);
    width: 0%;
  }
}
</style>
