<template>
  <div class="container">
    <select-quest @select="onSelect" />
    <div v-if="select" class="select-margin">
      <selected-result :result="select" />
      <button @click="select = null">戻る</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SelectQuest from './components/SelectQuest.vue';
import SelectedResult from './components/SelectedResult.vue';
import { Result } from './types/result';

export default defineComponent({
  name: 'App',
  components: {
    SelectQuest,
    SelectedResult,
  },
  setup: () => {
    const select = ref<Result | null>(null);

    const onSelect = (result: Result) => {
      select.value = result;
    };

    return {
      select,
      onSelect,
    };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&family=Shippori+Mincho&display=swap');

#app {
  font-family: Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans,
    BIZ UDPGothic, Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  transition: none;
}

.container {
  margin: auto auto;
  width: 80%;
  max-width: 864px;
}

.select-margin {
  margin-top: 2em;
}
</style>
