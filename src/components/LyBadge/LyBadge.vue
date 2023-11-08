<script setup lang="ts">
import { useVariants } from "@/composables/useVariants";
import type { LyBadgeVariants } from "@/components/LyBadge/LyBadge.type";

defineProps({
  ...useVariants<LyBadgeVariants>(),
  outline: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <span
    class="ly-badge"
    :class="[{ 'ly-badge--outline': outline }, `ly-variant--${variant}`]"
  >
    <slot></slot>
  </span>
</template>

<style lang="scss">
@use "variables";
.ly-badge {
  padding: var(--ly-badge-padding-top) var(--ly-badge-padding-right)
    var(--ly-badge-padding-bottom) var(--ly-badge-padding-left);
  font-weight: var(--ly-badge-line-font-weight);
  border-radius: var(--ly-badge-border-radius);
  font-size: var(--ly-badge-font-size);
  line-height: var(--ly-badge-line-height);
  color: var(--ly-badge-color);
  box-sizing: border-box;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  color: var(--variant-text-color);
  background-color: var(--variant-color);

  &--outline {
    background-color: transparent;
    color: var(--variant-color);
    border: 1px solid var(--variant-color);
  }
}
</style>
