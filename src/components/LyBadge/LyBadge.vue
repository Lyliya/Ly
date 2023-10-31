<script setup lang="ts">
import { useVariants } from "@/composables/useVariants";
import type { LyBadgeVariants } from "@/components/LyBadge/LyBadge.type";

defineProps({
  ...useVariants<LyBadgeVariants>(),
});
</script>

<template>
  <span class="ly-badge" :class="[`ly-badge--${variant}`]">
    <slot></slot>
  </span>
</template>

<style lang="scss">
@use "variables";
.ly-badge {
  padding: 4px 8px 4px 8px;
  font-weight: 600;
  border-radius: 4px;
  font-size: 0.75rem;
  line-height: 1rem;
  color: white;

  &--success {
    background-color: var(--ly-badge-bg-success);
  }

  &--danger {
    background-color: var(--ly-badge-bg-danger);
  }

  &--warning {
    background-color: var(--ly-badge-bg-warning);
  }
}
</style>
