<template>
  <div class="result">
    <div class="weapon">
      <div class="subtitle">武器種</div>
      <div class="weapom-img">{{ result.weapon.name }}</div>
      <div>
        <img :src="weaponImage" />
      </div>
    </div>
    <div class="quest">
      <div class="subtitle">クエスト</div>
      <div class="quest-info">
        <span class="quest-name">{{ result.quest.name }}</span>
        <span class="quest-additional-info">
          （{{ result.quest.type }} ★{{ result.quest.level }} )
        </span>
      </div>
      <div class="monsters">
        <div
          v-for="monster in result.quest.monsters"
          :key="monster.name"
          class="monster"
        >
          <img class="monster-img" :src="`/monsters/${monster.image}`" />
          <span class="monster-name">{{ monster.name }}</span>
        </div>
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
    console.log(props.result);
    const targetTime = computed(() => {
      const orgTime = props.result.quest.level + 2;
      const additionalTime = props.result.quest.monsters.some(
        (monster) => monster.apex || monster.old
      )
        ? 5
        : 0;
      const targetCountTime =
        (props.result.quest.monsters.length - 1) * 1.5 * orgTime;
      const range = Math.floor(orgTime * 0.8);

      return (
        orgTime +
        additionalTime +
        targetCountTime +
        Math.floor(range * Math.random())
      );
    });

    const weaponImage = computed(() => `/weapons/${props.result.weapon.image}`);

    return {
      targetTime,
      weaponImage,
    };
  },
});
</script>

<style></style>
