<template>
  <div id="result" :class="{ result: true, disappear: animation }">
    <div :class="{ quest: true, 'quest-disappear': animation }">
      <div class="subtitle">クエスト</div>
      <div class="quest-info">
        <span class="quest-name-wrapper"
          ><span class="quest-name">{{ result.quest.name }}</span></span
        >
        <span class="central-line animation-line-top" />
        <span class="central-line animation-line-bottom" />
        <span class="quest-additional-info">
          <span class="quest-type">{{ result.quest.type }}</span>
          <span
            v-for="i in result.quest.level"
            :key="i"
            class="star"
            :data-star="i"
            >★
          </span>
          <span v-if="result.quest.type === '闘技場'" class="notation"
            >(独断と偏見です)</span
          >
        </span>
      </div>
      <div class="monsters">
        <div
          v-for="(monster, i) in result.quest.monsters"
          :key="monster.name + i"
          class="monster"
        >
          <span class="monster-wrapper">
            <img
              class="monster-img"
              :src="`/monster-hunter-rise-quest-select/monsters/${monster.image}`"
              :style="`transition-delay: ${i * 0.1 + 2.0}s`"
            />
          </span>
          <span class="monster-wrapper">
            <span
              class="monster-name"
              :style="`transition-delay: ${i * 0.1 + 2.0}s`"
              >{{ monster.name }}</span
            >
          </span>
        </div>
        <span class="central-line animation-line-monster" />
        <span
          class="
            central-line
            animation-line-monster animation-line-monster-twice
          "
        />
      </div>
    </div>
    <div :class="{ weapon: true, 'weapon-disappear': animation }">
      <div class="subtitle">武器種</div>
      <div class="weapon-info">
        <img class="weapom-img" :src="weaponImage" />
        <span class="weapon-name">{{ result.weapon.name }}</span>
      </div>
    </div>
    <div :class="{ time: true, 'time-disappear': animation }">
      <div class="subtitle">制限時間</div>
      <div class="deadline">
        <span class="deadline-info">
          <span class="deadline-minuts">{{
            displayTime !== null ? displayTime : targetTime
          }}</span>
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
    const animationParam = new URL(window.location.toString()).searchParams.get(
      'animation'
    );
    const animation = animationParam === '';
    const appearQuest = ref(false);
    const targetTime = computed(() => {
      const orgTime = props.result.quest.level + 4;
      const additionalTime = props.result.quest.monsters.some(
        (monster) => monster.apex || monster.old
      )
        ? 5
        : 0;
      const targetCountTime = Math.floor(
        (props.result.quest.monsters.length - 1) * 0.6 * orgTime
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
    const displayTime = ref<number | null>(animation ? 0 : null);

    onMounted(() => {
      location.hash = '';
      location.hash = 'result';
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
    if (animation) {
      onMounted(() => {
        const result = document.getElementById('result')!;
        const quest = result.querySelector('.quest')!;
        const weapon = result.querySelector('.weapon')!;
        const time = result.querySelector('.time')!;
        let timerId: number;

        sleep(1000, () => {
          result.classList.add('appear');
          result.classList.remove('disappear');
          quest.classList.add('quest-appear');
          quest.classList.remove('quest-disappear');
        })
          .then(() => {
            return sleep(2000, () => {
              weapon.classList.add('weapon-appear');
              weapon.classList.remove('weapon-disappear');
            });
          })
          .then(() => {
            return sleep(1600, () => {
              time.classList.add('time-appear');
              time.classList.remove('time-disappear');
            });
          })
          .then(() => {
            return sleep(100, async () => {
              const changeTargetTime = () => {
                if (displayTime.value === null) {
                  return;
                }
                displayTime.value! += 1;
                if (displayTime.value === targetTime.value) {
                  displayTime.value = null;
                }
              };

              while (
                displayTime.value !== null &&
                displayTime.value < targetTime.value - 5
              ) {
                await sleep(32, changeTargetTime);
              }

              await sleep(200, changeTargetTime);
              await sleep(200, changeTargetTime);
              await sleep(300, changeTargetTime);
              await sleep(400, changeTargetTime);
              await sleep(500, changeTargetTime);
            });
          });
      });
    }

    console.log(targetTime.value);

    return {
      targetTime,
      weaponImage,
      animation,
      displayTime,
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

.monster-name {
  margin-top: 0.2em;
}

.weapom-img,
.monster-img {
  width: 64px;
  height: 64px;
}

.quest-name {
  font-family: 'Shippori Mincho', '游明朝', 'Yu Mincho', YuMincho,
    'Hiragino Mincho Pro', serif;
  font-size: 48px;
}

.quest-additional-info > span {
  font-size: 24px;
}

.quest-type {
  padding: 0.4em 0.2em;
}

.time {
  margin: 1.2em 0;
}

.deadline-minuts {
  font-size: 24px;
  font-weight: 600;
}

.notation {
  font-size: 10.5px !important;
}

/* animation */
.disappear .subtitle {
  opacity: 0;
}

.appear .subtitle {
  opacity: 1;
}

.subtitle {
  transition: opacity 0.3s ease;
}

.quest .subtitle {
  transition-delay: 0;
}

.weapon .subtitle {
  transition-delay: 3s;
}

.time .subtitle {
  transition-delay: 4s;
}

.quest-additional-info,
.quest-name-wrapper {
  overflow: hidden;
  position: relative;
}

.quest-disappear .quest-name {
  position: relative;
  transform: translateY(2em);
}

.quest-name {
  display: block;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: 2.5s;
}

.quest-disappear .quest-additional-info span {
  position: relative;
  transform: translateY(-2em);
}

.quest-disappear .quest-additional-info .notation {
  transform: translateY(-4em) !important;
}

.quest-additional-info span {
  display: inline-block;
  transition-property: transform;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

.quest-type {
  transition-delay: 0.2s !important;
}

.star[data-star='1'] {
  transition-delay: 0.5s !important;
}

.star[data-star='2'] {
  transition-delay: 0.6s !important;
}

.star[data-star='3'] {
  transition-delay: 0.7s !important;
}

.star[data-star='4'] {
  transition-delay: 0.8s !important;
}

.star[data-star='5'] {
  transition-delay: 0.9s !important;
}

.star[data-star='6'] {
  transition-delay: 1s !important;
}

.star[data-star='7'] {
  color: red;
  transition-delay: 1.3s !important;
}

.notation {
  transition-delay: 1.6s !important;
}

.central-line {
  width: 100%;
  position: relative;
}

.monster-wrapper {
  overflow: hidden;
}

.monster-img,
.monster-name {
  display: inline-block;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

.quest-disappear .monster-img {
  transform: rotate(-90deg) translateY(64px);
}

.quest-disappear .monster-name {
  transform: translateY(-2em);
}

.animation-line-top::after,
.animation-line-bottom::after {
  position: absolute;
  bottom: 0;
  content: '';
  height: 1px;
  left: 50%;
  height: 1px;
  transform: translate(-50%, 0);
  width: 0;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  background-color: black;
}

.animation-line-monster {
  position: absolute;
  bottom: 1.8em;
}
.animation-line-monster::after {
  position: absolute;
  bottom: 0;
  content: '';
  height: 1px;
  width: 0;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  background-color: black;
}

.quest-appear .animation-line-bottom::after {
  animation-name: animation-line-bottom-keyframe;
}

.quest-appear .animation-line-top::after {
  animation-name: animation-line-top-keyframe;
}

.quest-appear .animation-line-top::after,
.quest-appear .animation-line-bottom::after {
  animation-duration: 5s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

.quest-appear .animation-line-monster::after {
  animation-name: animation-line-monster-keyframe;
  animation-duration: 1.2s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  animation-delay: 1.6s;
}

.weapon-disappear .weapon-info {
  transform: rotateY(90deg);
}

.weapon-info {
  transform: none;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) 1.5s;
}

.time-disappear .deadline {
  opacity: 0;
  transform: translateY(1em);
}

.deadline {
  opacity: 1;
  transform: none;
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 2s ease;
}

@keyframes animation-line-top-keyframe {
  0% {
    transform: translate(-50%, 0);
    width: 0%;
  }
  10% {
    transform: translate(-50%, 0);
    width: 100%;
  }

  50% {
    transform: translate(-50%, 0);
  }

  60% {
    transform: translate(-50%, -64px);
  }

  65% {
    transform: translate(-50%, -64px);
    width: 100%;
  }

  75% {
    transform: translate(-50%, -64px);
    width: 0;
  }

  100% {
    transform: translate(-50%, -64px);
    width: 0%;
  }
}

@keyframes animation-line-bottom-keyframe {
  0% {
    width: 0%;
  }
  10% {
    width: 100%;
  }

  100% {
    width: 100%;
  }
}

@keyframes animation-line-monster-keyframe {
  0% {
    width: 0;
    left: -24px;
    right: none;
  }
  25% {
    width: 100%;
    left: 0;
    right: none;
  }

  75% {
    right: 0;
    left: none;
    width: 100%;
  }
  100% {
    right: -24px;
    left: none;
    width: 0;
  }
}
</style>
