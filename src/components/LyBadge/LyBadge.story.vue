<script setup lang="ts">
import LyBadge from "./LyBadge.vue";
</script>

<template>
  <Story title="LyBadge" :layout="{ type: 'grid', width: 200 }">
    <Variant title="success">
      <LyBadge variant="success">Success</LyBadge>
    </Variant>
    <Variant title="warning">
      <LyBadge variant="warning">Warning</LyBadge>
    </Variant>
    <Variant title="danger">
      <LyBadge variant="danger">Danger</LyBadge>
    </Variant>
  </Story>
</template>
