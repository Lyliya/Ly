<script setup lang="ts">
// import "../dist/style.css";
// import { LyButton, LyBadge } from "../dist/ly-test.js";
import "@/style.scss";
import { LyButton, LyBadge } from ".";
</script>

<template>
  <div class="flex-col">
    <h1>Playground</h1>
    <div class="flex">
      <LyButton variant="success" outline>Hello World !</LyButton>
      <LyButton variant="danger">Hello World !</LyButton>
      <LyButton variant="warning">Hello World !</LyButton>
    </div>
    <div class="flex">
      <LyBadge variant="success">Hello World !</LyBadge>
      <LyBadge variant="danger">Hello World !</LyBadge>
      <LyBadge variant="warning">Hello World !</LyBadge>
    </div>
  </div>
</template>

<style lang="scss">
.ly-button--success {
  --theme-color: pink;
}

.flex {
  display: flex;
  gap: 1rem;
}

.flex-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
