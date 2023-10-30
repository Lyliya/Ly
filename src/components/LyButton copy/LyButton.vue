<script setup lang="ts">
import { useVariants } from "@/composables/useVariants";
import type { LyButtonVariants } from "@/components/LyButton/LyButton.type";

defineProps({
  ...useVariants<LyButtonVariants>(),
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="ly-button"
    :class="[`ly-button--${variant}`]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
:root {
  --ly-button-bg-success: var(--bg-success);
  --ly-button-bg-success-hover: var(--bg-success-hover);
  --ly-button-bg-danger: var(--bg-danger);
  --ly-button-bg-warning: var(--bg-warning);
}
.ly-button {
  all: unset;
  cursor: pointer;
  padding: 8px 24px 8px 24px;
  font-weight: 500;
  border-radius: 8px;
  font-size: 18px;
  line-height: 28px;
  color: white;

  &--success {
    background-color: var(--ly-button-bg-success);

    &:hover {
      background-color: var(--ly-button-bg-success-hover);
    }
  }

  &--danger {
    background-color: var(--ly-button-bg-danger);
  }

  &--warning {
    background-color: var(--ly-button-bg-warning);
  }
}
</style>
