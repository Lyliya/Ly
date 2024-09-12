<script setup lang="ts">
import LyButton from "../LyButton.vue";
</script>

<template>
  <Story title="LyButton/Loading" :layout="{ type: 'grid', width: 200 }">
    <Variant title="loading">
      <LyButton loading><span>Loading</span></LyButton>
    </Variant>
  </Story>
</template>
