<script setup lang="ts">
import LyButton from "../LyButton.vue";
</script>

<template>
  <Story title="LyButton/Wide" :layout="{ type: 'grid', width: 200 }">
    <Variant title="wide">
      <LyButton wide><span>Wide</span></LyButton>
    </Variant>
  </Story>
</template>
