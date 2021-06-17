<template>
  <select-quest></select-quest>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectQuest from './components/SelectQuest.vue';

export default defineComponent({
  name: 'App',
  components: {
    SelectQuest,
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
