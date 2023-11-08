<script setup lang="ts">
import LyBadge from "../LyBadge.vue";
import { lyBadgeVariants } from "../LyBadge.type";
</script>

<template>
  <Story title="LyBadge/Outline" :layout="{ type: 'grid', width: 200 }">
    <Variant v-for="variant in lyBadgeVariants" :title="`${variant} outline`">
      <LyBadge :variant="variant" outline
        ><span>{{ variant }}</span></LyBadge
      >
    </Variant>
  </Story>
</template>
