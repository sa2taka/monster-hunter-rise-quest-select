<template>
  <div class="options">
    <div class="option">
      <span class="open-menu_label" for="open-menu_level"
        >クエストのレベル</span
      >
      <div class="open-menu_content">
        <div class="option-row">
          <input
            id="level1"
            v-model="option.levels.level1"
            type="checkbox"
            name="levels"
          />
          <label for="level1">★1</label>
        </div>
        <div class="option-row">
          <input
            id="level2"
            v-model="option.levels.level2"
            type="checkbox"
            name="levels"
          />
          <label for="level2">★2</label>
        </div>
        <div class="option-row">
          <input
            id="level3"
            v-model="option.levels.level3"
            type="checkbox"
            name="levels"
          />
          <label for="level3">★3</label>
        </div>
        <div class="option-row">
          <input
            id="level4"
            v-model="option.levels.level4"
            type="checkbox"
            name="levels"
          />
          <label for="level4">★4</label>
        </div>
        <div class="option-row">
          <input
            id="level5"
            v-model="option.levels.level5"
            type="checkbox"
            name="levels"
          />
          <label for="level5">★5</label>
        </div>
        <div class="option-row">
          <input
            id="level6"
            v-model="option.levels.level6"
            type="checkbox"
            name="levels"
          />
          <label for="level6">★6</label>
        </div>
        <div class="option-row">
          <input
            id="level7"
            v-model="option.levels.level7"
            type="checkbox"
            name="levels"
          />
          <label for="level7">★7</label>
        </div>
      </div>
    </div>

    <div class="option">
      <span class="open-menu_label"> クエストのタイプ </span>
      <div class="open-menu_content">
        <div class="option-row">
          <input
            id="village"
            v-model="option.types.village"
            type="checkbox"
            name="types"
          />
          <label for="village">村</label>
        </div>
        <div class="option-row">
          <input
            id="lobby"
            v-model="option.types.lobby"
            type="checkbox"
            name="types"
          />
          <label for="lobby">集会場</label>
        </div>
        <div class="option-row">
          <input
            id="event"
            v-model="option.types.event"
            type="checkbox"
            name="types"
          />
          <label for="event">イベント</label>
        </div>
        <div class="option-row">
          <input
            id="highLevel"
            v-model="option.types.highLevel"
            type="checkbox"
            name="types"
          />
          <label for="highLevel">高難度</label>
        </div>
        <div class="option-row">
          <input
            id="arena"
            v-model="option.types.arena"
            type="checkbox"
            name="types"
          />
          <label for="arena">闘技場</label>
        </div>
      </div>
    </div>

    <div class="option">
      <span class="open-menu_label"> モンスターの種類 </span>
      <div class="open-menu_content">
        <div class="option-row">
          <input
            id="normal"
            v-model="option.monster.normal"
            type="checkbox"
            name="monster"
          />
          <label for="normal">通常</label>
        </div>
        <div class="option-row">
          <input
            id="apex"
            v-model="option.monster.apex"
            type="checkbox"
            name="monster"
          />
          <label for="apex">ヌシ</label>
        </div>
        <div class="option-row">
          <input
            id="old"
            v-model="option.monster.old"
            type="checkbox"
            name="monster"
          />
          <label for="old">古龍</label>
        </div>
      </div>
    </div>

    <div class="option">
      <span class="open-menu_label"> 武器種 </span>
      <div class="open-menu_content">
        <div class="option-row">
          <input
            id="greadSword"
            v-model="option.weapons.greadSword"
            type="checkbox"
            name="weapons"
          />
          <label for="greadSword">大剣</label>
        </div>
        <div class="option-row">
          <input
            id="longSword"
            v-model="option.weapons.longSword"
            type="checkbox"
            name="weapons"
          />
          <label for="longSword">太刀</label>
        </div>
        <div class="option-row">
          <input
            id="swordAndShield"
            v-model="option.weapons.swordAndShield"
            type="checkbox"
            name="weapons"
          />
          <label for="swordAndShield">片手剣</label>
        </div>
        <div class="option-row">
          <input
            id="dualBlades"
            v-model="option.weapons.dualBlades"
            type="checkbox"
            name="weapons"
          />
          <label for="dualBlades">双剣</label>
        </div>

        <div class="option-row">
          <input
            id="hammer"
            v-model="option.weapons.hammer"
            type="checkbox"
            name="weapons"
          />
          <label for="hammer">ハンマー</label>
        </div>
        <div class="option-row">
          <input
            id="huntingHorn"
            v-model="option.weapons.huntingHorn"
            type="checkbox"
            name="weapons"
          />
          <label for="huntingHorn">狩猟笛</label>
        </div>
        <div class="option-row">
          <input
            id="lance"
            v-model="option.weapons.lance"
            type="checkbox"
            name="weapons"
          />
          <label for="lance">ランス</label>
        </div>
        <div class="option-row">
          <input
            id="gunlance"
            v-model="option.weapons.gunlance"
            type="checkbox"
            name="weapons"
          />
          <label for="gunlance">ガンランス</label>
        </div>
        <div class="option-row">
          <input
            id="switchAxe"
            v-model="option.weapons.switchAxe"
            type="checkbox"
            name="weapons"
          />
          <label for="switchAxe">スラッシュアックス</label>
        </div>
        <div class="option-row">
          <input
            id="chargeBlade"
            v-model="option.weapons.chargeBlade"
            type="checkbox"
            name="weapons"
          />
          <label for="chargeBlade">チャージアックス</label>
        </div>
        <div class="option-row">
          <input
            id="insectGlaive"
            v-model="option.weapons.insectGlaive"
            type="checkbox"
            name="weapons"
          />
          <label for="insectGlaive">操虫棍</label>
        </div>
        <div class="option-row">
          <input
            id="lightBowgun"
            v-model="option.weapons.lightBowgun"
            type="checkbox"
            name="weapons"
          />
          <label for="lightBowgun">ライトボウガン</label>
        </div>
        <div class="option-row">
          <input
            id="heaveyBowgun"
            v-model="option.weapons.heaveyBowgun"
            type="checkbox"
            name="weapons"
          />
          <label for="heaveyBowgun">ヘビィボウガン</label>
        </div>
        <div class="option-row">
          <input
            id="bow"
            v-model="option.weapons.bow"
            type="checkbox"
            name="weapons"
          />
          <label for="bow">弓</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, watch } from 'vue';
import { Option } from '../types/option';

export default defineComponent({
  name: 'SelectOption',
  props: {
    modelValue: {
      type: Object as PropType<Option>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup: (props, context) => {
    const option = reactive(props.modelValue);

    watch(option, () => {
      context.emit('update:modelValue', option);
    });

    return {
      option,
    };
  },
});
</script>

<style scoped>
.options {
  display: flex;
  flex-wrap: wrap;
}

.option {
  flex: 1 1 auto;
  margin: 1em 0.6em;
}

.open-menu_label {
  background: #0068b7;
  color: #fff;
  display: block;
  margin-bottom: 1px;
  padding: 10px;
  position: relative;
  height: 38px;
  text-align: left;
}

.open-menu_content {
  border: 1px solid #333;
  opacity: 1;
  padding: 10px;

  display: flex;
  flex-wrap: wrap;
}

.option-row {
  display: flex;
  align-items: center;
  margin: 0.6em 1em;
}

.option-row > label {
  font-size: 1.2em;
  padding-right: 0.6em;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
}
</style>
