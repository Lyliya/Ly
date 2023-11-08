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
    :class="[{ 'ly-button--outline': outline }, `ly-badge--${variant}`]"
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
  border: 2px solid;

  &--success {
    background-color: var(--ly-badge-bg-success);
    border-color: var(--ly-badge-bg-success);
  }

  &--danger {
    background-color: var(--ly-badge-bg-danger);
    border-color: var(--ly-badge-bg-danger);
  }

  &--warning {
    background-color: var(--ly-badge-bg-warning);
    border-color: var(--ly-badge-bg-warning);
  }

  &--outline {
    background-color: transparent;
  }
}
</style>
