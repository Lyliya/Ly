<script setup lang="ts">
import { useVariants } from "@/composables/useVariants";
import type { LyButtonVariants } from "@/components/LyButton/LyButton.type";

defineOptions({
  inheritAttrs: false,
});

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
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
@use "variables";

.ly-button {
  cursor: pointer;
  padding: var(--ly-button-padding-top) var(--ly-button-padding-right)
    var(--ly-button-padding-bottom) var(--ly-button-padding-left);
  font-weight: var(--ly-button-line-font-height);
  border-radius: var(--ly-button-border-radius);
  font-size: var(--ly-button-font-size);
  line-height: var(--ly-button-line-height);
  color: var(--ly-button-color);
  display: block;

  &--success {
    background-color: var(--ly-button-bg-success);

    &:hover {
      background-color: var(--ly-button-bg-success-hover);
    }
  }

  &--danger {
    background-color: var(--ly-button-bg-danger);
    &:hover {
      background-color: var(--ly-button-bg-danger-hover);
    }
  }

  &--warning {
    background-color: var(--ly-button-bg-warning);
    &:hover {
      background-color: var(--ly-button-bg-warning-hover);
    }
  }
}
</style>
