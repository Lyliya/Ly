<script setup lang="ts">
import LyBadge from "../LyBadge.vue";
</script>

<template>
  <Story title="LyBadge/Slots" :layout="{ type: 'grid', width: 200 }">
    <Variant title="Prepend">
      <LyBadge>
        <template #prepend>✓</template>
        Prepend
      </LyBadge>
    </Variant>
    <Variant title="Append">
      <LyBadge>
        <template #append>✓</template>
        Append
      </LyBadge>
    </Variant>
  </Story>
</template>
