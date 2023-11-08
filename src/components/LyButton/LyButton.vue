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
  outline: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="ly-button"
    :class="[
      { 'ly-button--disabled': disabled, 'ly-button--outline': outline },
      `ly-button--${variant}`,
    ]"
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
  font-weight: var(--ly-button-line-font-weight);
  border-radius: var(--ly-button-border-radius);
  font-size: var(--ly-button-font-size);
  line-height: var(--ly-button-line-height);
  color: var(--ly-button-color);
  display: block;
  box-sizing: border-box;
  border: 2px solid;
  transition: background-color 0.2s;

  &--disabled {
    opacity: 75%;
    cursor: not-allowed;
  }

  &--success {
    background-color: var(--ly-button-bg-success);
    border-color: var(--ly-button-bg-success);

    &:hover:not(.ly-button--disabled) {
      background-color: var(--ly-button-bg-success-hover);
      border-color: var(--ly-button-bg-success-hover);
    }
  }

  &--danger {
    background-color: var(--ly-button-bg-danger);
    border-color: var(--ly-button-bg-danger);

    &:hover:not(.ly-button--disabled) {
      background-color: var(--ly-button-bg-danger-hover);
      border-color: var(--ly-button-bg-danger-hover);
    }
  }

  &--warning {
    background-color: var(--ly-button-bg-warning);
    border-color: var(--ly-button-bg-warning);

    &:hover:not(.ly-button--disabled) {
      background-color: var(--ly-button-bg-warning-hover);
      border-color: var(--ly-button-bg-warning-hover);
    }
  }

  &--outline {
    background-color: transparent;
  }
}
</style>
