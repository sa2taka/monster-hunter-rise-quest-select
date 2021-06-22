<template>
  <div class="container">
    <select-quest @select="onSelect" />
    <div v-if="select" class="select-margin">
      <selected-result :result="select" />
      <button class="btn" @click="select = null">戻る</button>
    </div>
    <div class="empty" />
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
      if (select.value) {
        select.value = null;
        setTimeout(() => {
          select.value = result;
        }, 1);
      } else {
        select.value = result;
      }
    };

    return {
      select,
      onSelect,
    };
  },
  methods: {
    forceUpdate() {
      this.$forceUpdate();
    },
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
  width: 95%;
  max-width: 864px;
}

.select-margin {
  margin-top: 2em;
}

.btn {
  background-color: transparent;
  border: 2px solid black;
  color: black;
  line-height: 50px;
  padding: 0.2em 2em;
  margin: 0 2em;
  border-radius: 5%;
  transition: all 0.2s ease;
}
.btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.empty {
  height: 10vh;
}
</style>
