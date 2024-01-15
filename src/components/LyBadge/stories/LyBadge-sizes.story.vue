<script setup lang="ts">
import LyBadge from "../LyBadge.vue";
import { lyBadgeSizes } from "../LyBadge.type";
</script>

<template>
  <Story title="LyBadge/Sizes" :layout="{ type: 'grid', width: 200 }">
    <Variant v-for="size in lyBadgeSizes" :title="`${size}`">
      <LyBadge :size="size">
        <span>{{ size }}</span>
      </LyBadge>
    </Variant>
  </Story>
</template>
