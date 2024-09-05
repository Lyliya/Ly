<script setup lang="ts">
import { useSizes } from "@/composables/useSizes";
import { useVariants } from "@/composables/useVariants";
import {
  lyButtonVariants,
  lyButtonSizes,
} from "@/components/LyButton/LyButton.type";
import { computed, useSlots } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  ...useVariants<typeof lyButtonVariants>(),
  ...useSizes<typeof lyButtonSizes>(),
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

const slots = useSlots();

const buttonClass = computed(() => ({
  "ly-button--outline": props.outline,
  "ly-button--rounded": props.rounded,
  "ly-button--disabled": props.disabled,
  "ly-button--icon": slots.icon !== undefined,
}));
</script>

<template>
  <button
    class="ly-button"
    :class="[buttonClass, `ly-button--${variant}`, `ly-button--${size}`]"
    :disabled="disabled"
  >
    <div class="ly-button__content">
      <div v-if="slots.prepend && !slots.icon">
        <slot name="prepend"></slot>
      </div>
      <slot v-if="!slots.icon"></slot>
      <slot name="icon"></slot>
      <div v-if="slots.append && !slots.icon">
        <slot name="append"></slot>
      </div>
    </div>
  </button>
</template>

<style lang="scss" scoped>
@use "variables";

.ly-button {
  cursor: pointer;
  padding: var(--ly-button-padding-top) var(--ly-button-padding-right)
    var(--ly-button-padding-bottom) var(--ly-button-padding-left);
  height: var(--ly-button-height);
  font-weight: var(--ly-button-line-font-weight);
  border-radius: var(--ly-button-border-radius);
  font-size: var(--ly-button-font-size);
  line-height: var(--ly-button-line-height);
  justify-content: center;
  box-sizing: border-box;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  color: var(--variant-text-color);
  background-color: var(--variant-color);

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

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

  &--icon {
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
