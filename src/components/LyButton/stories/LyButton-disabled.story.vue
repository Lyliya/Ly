<script setup lang="ts">
import LyButton from "../LyButton.vue";
</script>

<template>
  <Story title="LyButton/Disabled" :layout="{ type: 'grid', width: 200 }">
    <Variant title="disabled">
      <LyButton disabled><span>Disabled</span></LyButton>
    </Variant>
  </Story>
</template>
