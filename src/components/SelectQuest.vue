<template>
  <div>
    <select-option v-model="option" />

    <button>選択開始</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, watch } from 'vue';
import { Option as IOption } from '../types/option';
import SelectOption from './SelectOption.vue';

const defaultOption: IOption = {
  levels: {
    level1: true,
    level2: true,
    level3: true,
    level4: true,
    level5: true,
    level6: true,
    level7: true,
  },
  types: {
    village: true,
    lobby: true,
    event: true,
    highLevel: true,
  },
  monster: {
    normal: true,
    apex: true,
    old: true,
  },
  weapons: {
    greadSword: true,
    longSword: true,
    swordAndShield: true,
    dualBlades: true,
    hammer: true,
    huntingHorn: true,
    lance: true,
    gunlance: true,
    switchAxe: true,
    chargeBlade: true,
    insectGlaive: true,
    lightBowgun: true,
    heaveyBowgun: true,
    bow: true,
  },
};

export default defineComponent({
  name: 'SelectQuest',
  components: {
    SelectOption,
  },
  setup: () => {
    const option = reactive(defaultOption);

    return {
      option,
    };
  },
});
</script>

<style></style>
