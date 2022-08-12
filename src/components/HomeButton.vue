<template>
  <button class="backHomeButtonCSS" @click="changeRoute('home')">
    <img src="/moose.png" alt="Moose" />
  </button>
</template>

<script setup lang="ts">
import { changeRoute, state } from "../router";
</script>

<style lang="scss">
.backHomeButtonCSS {
  background-color: var(--colorBlue);
  height: 8vh;
  border: 1px double var(--colorBlue);
  border-radius: 25% 25%;
  //   transition: border 50ms;

  &:focus {
    border-color: var(--colorYellow);
  }
}
</style>
