<template>
  <div v-if="alertText">{{ alertText }}</div>
</template>

<script setup lang="ts">
import { ref, Ref, toRefs } from "vue";

const props = defineProps<{
  alertText: string;
}>();
const { alertText } = toRefs(props);
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  background-color: var(--colorYellow);
  color: var(--colorBlue);
  height: 100vh;
  width: 100vw;
  font-size: 24px;
}
</style>
