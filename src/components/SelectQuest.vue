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

const getOptionByUrl = () => {
  const url = new URL(window.location.toString());
  return {
    levels: {
      level1: url.searchParams.get('level1') !== 'false',
      level2: url.searchParams.get('level2') !== 'false',
      level3: url.searchParams.get('level3') !== 'false',
      level4: url.searchParams.get('level4') !== 'false',
      level5: url.searchParams.get('level5') !== 'false',
      level6: url.searchParams.get('level6') !== 'false',
      level7: url.searchParams.get('level7') !== 'false',
    },
    types: {
      village: url.searchParams.get('village') !== 'false',
      lobby: url.searchParams.get('lobby') !== 'false',
      event: url.searchParams.get('event') !== 'false',
      highLevel: url.searchParams.get('highLevel') !== 'false',
    },
    monster: {
      normal: url.searchParams.get('normal') !== 'false',
      apex: url.searchParams.get('apex') !== 'false',
      old: url.searchParams.get('old') !== 'false',
    },
    weapons: {
      greadSword: url.searchParams.get('greadSword') !== 'false',
      longSword: url.searchParams.get('longSword') !== 'false',
      swordAndShield: url.searchParams.get('swordAndShield') !== 'false',
      dualBlades: url.searchParams.get('dualBlades') !== 'false',
      hammer: url.searchParams.get('hammer') !== 'false',
      huntingHorn: url.searchParams.get('huntingHorn') !== 'false',
      lance: url.searchParams.get('lance') !== 'false',
      gunlance: url.searchParams.get('gunlance') !== 'false',
      switchAxe: url.searchParams.get('switchAxe') !== 'false',
      chargeBlade: url.searchParams.get('chargeBlade') !== 'false',
      insectGlaive: url.searchParams.get('insectGlaive') !== 'false',
      lightBowgun: url.searchParams.get('lightBowgun') !== 'false',
      heaveyBowgun: url.searchParams.get('heaveyBowgun') !== 'false',
      bow: url.searchParams.get('bow') !== 'false',
    },
  };
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

const setUrl = (option: IOption) => {
  const url = new URL(window.location.toString());
  const level = option.levels;
  const type = option.types;
  const monster = option.monster;
  const weapon = option.weapons;

  const setUrl = (object: any) => {
    for (let [key, value] of Object.entries(object)) {
      if (!value) {
        url.searchParams.set(key, 'false');
      } else {
        url.searchParams.delete(key);
      }
    }
  };

  setUrl(level);
  setUrl(type);
  setUrl(monster);
  setUrl(weapon);

  window.history.pushState({}, '', url.toString());
};

export default defineComponent({
  name: 'SelectQuest',
  components: {
    SelectOption,
  },
  emits: ['select'],
  setup: (_, context) => {
    const deepCopyDefaultOption = JSON.parse(JSON.stringify(getOptionByUrl()));
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

    watch(option, () => {
      setUrl(option);
    });

    return {
      option,
      reset,
      select,
    };
  },
});
</script>

<style></style>
