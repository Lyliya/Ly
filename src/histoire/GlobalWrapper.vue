<script lang="ts" setup>
import { Story, Variant } from "histoire";

const props = defineProps<{
  story: Story;
  variant?: Variant;
}>();

function hasWrapper() {
  return (
    props.story.meta?.wrapper !== false &&
    props.variant?.meta?.wrapper !== false
  );
}
</script>

<template>
  <div class="global-wrapper" :style="hasWrapper() ? 'padding: 0.5rem;' : ''">
    <slot />
  </div>
</template>
