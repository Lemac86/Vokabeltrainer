<template>
  <button class="backHomeButtonCSS" @mousedown="changeRoute('home')">
    <img src="/moose.png" alt="Moose" class="mooseImg" />
  </button>
</template>

<script setup lang="ts">
import { changeRoute, state } from "../router";
</script>

<style lang="scss" scoped>
.backHomeButtonCSS {
  background-color: transparent;
  width: 45px;
  aspect-ratio: 1/1;
  position: relative;
  left: calc(100vw - 65px);
  border: none;
  transition: 500ms;
  cursor: pointer;

  &:focus {
    left: 0px;
  }
}
</style>
