<template>
  <div>
    <select-option v-model="option" />

    <button @click="select">選択開始</button>
    <button @click="reset">リセット</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, watch } from 'vue';
import { Quests } from '../data/quest';
import { Weapon, Weapons } from '../data/weapons';
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

const filterQuest = (option: IOption) => {
  const selectLevels: number[] = [];
  if (option.levels.level1) {
    selectLevels.push(1);
  }
  if (option.levels.level2) {
    selectLevels.push(2);
  }
  if (option.levels.level3) {
    selectLevels.push(3);
  }
  if (option.levels.level4) {
    selectLevels.push(4);
  }
  if (option.levels.level5) {
    selectLevels.push(5);
  }
  if (option.levels.level6) {
    selectLevels.push(6);
  }
  if (option.levels.level7) {
    selectLevels.push(7);
  }

  const selectTypes: ('里' | '集会所' | 'イベント' | '高難度')[] = [];
  if (option.types.village) {
    selectTypes.push('里');
  }
  if (option.types.lobby) {
    selectTypes.push('集会所');
  }
  if (option.types.event) {
    selectTypes.push('イベント');
  }
  if (option.types.highLevel) {
    selectTypes.push('高難度');
  }

  return Quests.filter(
    (quest) =>
      selectLevels.includes(quest.level) &&
      selectTypes.includes(quest.type) &&
      quest.monsters.some(
        (monster) =>
          (monster.apex && option.monster.apex) ||
          (monster.old && option.monster.old) ||
          (!monster.apex && !monster.old && option.monster.normal)
      )
  );
};

const filterWeapon = (option: IOption) => {
  const filterd: Weapon[] = [];
  if (option.weapons.greadSword) {
    filterd.push(Weapons[0]);
  }
  if (option.weapons.longSword) {
    filterd.push(Weapons[1]);
  }
  if (option.weapons.swordAndShield) {
    filterd.push(Weapons[2]);
  }
  if (option.weapons.dualBlades) {
    filterd.push(Weapons[3]);
  }
  if (option.weapons.hammer) {
    filterd.push(Weapons[4]);
  }
  if (option.weapons.huntingHorn) {
    filterd.push(Weapons[5]);
  }
  if (option.weapons.lance) {
    filterd.push(Weapons[6]);
  }
  if (option.weapons.gunlance) {
    filterd.push(Weapons[7]);
  }
  if (option.weapons.switchAxe) {
    filterd.push(Weapons[8]);
  }
  if (option.weapons.chargeBlade) {
    filterd.push(Weapons[9]);
  }
  if (option.weapons.insectGlaive) {
    filterd.push(Weapons[10]);
  }
  if (option.weapons.lightBowgun) {
    filterd.push(Weapons[11]);
  }
  if (option.weapons.heaveyBowgun) {
    filterd.push(Weapons[12]);
  }
  if (option.weapons.bow) {
    filterd.push(Weapons[13]);
  }
  return filterd;
};

export default defineComponent({
  name: 'SelectQuest',
  components: {
    SelectOption,
  },
  emits: ['select'],
  setup: (_, context) => {
    const deepCopyDefaultOption = JSON.parse(JSON.stringify(defaultOption));
    const option = reactive(deepCopyDefaultOption);

    const reset = () => {
      const deepCopyDefaultOption = JSON.parse(JSON.stringify(defaultOption));
      Object.assign(option, deepCopyDefaultOption);
    };

    const select = () => {
      const filterdQuest = filterQuest(option);
      const selectQuest =
        filterdQuest[Math.floor(Math.random() * (filterdQuest.length - 1))];

      const filterdWeapon = filterWeapon(option);
      const selectWeapon =
        filterdWeapon[Math.floor(Math.random() * (filterdWeapon.length - 1))];

      context.emit('select', { quest: selectQuest, weapon: selectWeapon });
    };

    return {
      option,
      reset,
      select,
    };
  },
});
</script>

<style></style>
