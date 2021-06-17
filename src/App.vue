<template>
  <select-quest v-if="!select" @select="onSelect" />
  <div v-else>
    <selected-result :result="select" />
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
#app {
  font-family: Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans,
    BIZ UDPGothic, Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
