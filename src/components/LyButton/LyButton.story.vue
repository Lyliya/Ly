<script setup lang="ts">
import LyButton from "./LyButton.vue";
</script>

<template>
  <Story title="LyButton" :layout="{ type: 'grid', width: 200 }">
    <Variant title="success">
      <LyButton variant="success">Success</LyButton>
    </Variant>
    <Variant title="warning">
      <LyButton variant="warning">Warning</LyButton>
    </Variant>
    <Variant title="danger">
      <LyButton variant="danger">Danger</LyButton>
    </Variant>
  </Story>
</template>
