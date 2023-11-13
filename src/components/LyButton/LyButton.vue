<script setup lang="ts">
import { useVariants } from "@/composables/useVariants";
import type { LyButtonVariants } from "@/components/LyButton/LyButton.type";
import { computed } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  ...useVariants<LyButtonVariants>(),
  disabled: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
});

const buttonClass = computed(() => ({
  "ly-button--outline": props.outline,
  "ly-button--rounded": props.rounded,
  "ly-button--disabled": props.disabled,
  "ly-button--icon-only": props.iconOnly,
}));
</script>

<template>
  <button
    class="ly-button"
    :class="[buttonClass, `ly-button--${variant}`]"
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
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-sizing: border-box;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  color: var(--variant-text-color);
  background-color: var(--variant-color);

  &:enabled {
    &:hover,
    &:active {
      color: var(--variant-text-color);
      background-color: var(--variant-color-dark);
    }
  }

  &--disabled {
    opacity: 75%;
    cursor: not-allowed;
  }

  &--outline {
    background-color: transparent;
    color: var(--variant-text-color);
    border: 1px solid var(--variant-color);

    &:enabled {
      &:hover,
      &:active {
        background-color: var(--variant-color);
      }
    }
  }

  &--rounded {
    border-radius: 2rem;
  }

  &--icon-only {
    justify-content: center;
    height: 40px;
    width: 40px;
    padding: 4px;
    &.ly-button--rounded {
      border-radius: 50%;
    }
  }
}
</style>
