<template>
  <div class="result">
    <div class="quest">
      <div class="subtitle">クエスト</div>
      <div class="quest-info">
        <span class="quest-name">{{ result.quest.name }}</span>
        <span class="quest-additional-info">
          {{ result.quest.type }} {{ '★'.repeat(result.quest.level) }}
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
    <div class="weapon">
      <div class="subtitle">武器種</div>
      <div class="weapon-info">
        <img class="weapom-img" :src="weaponImage" />
        <span class="weapon-name">{{ result.weapon.name }}</span>
      </div>
    </div>
    <div class="time">
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
import { defineComponent, computed, PropType } from 'vue';

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
    const targetTime = computed(() => {
      const orgTime = props.result.quest.level + 2;
      const additionalTime = props.result.quest.monsters.some(
        (monster) => monster.apex || monster.old
      )
        ? 2
        : 0;
      const targetCountTime =
        (props.result.quest.monsters.length - 1) * 0.5 * orgTime;
      const range = Math.floor(orgTime * 0.8);

      return (
        orgTime +
        additionalTime +
        targetCountTime +
        Math.floor(range * Math.random())
      );
    });

    const weaponImage = computed(
      () =>
        `/monster-hunter-rise-quest-select/weapons/${props.result.weapon.image}`
    );

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
</style>
