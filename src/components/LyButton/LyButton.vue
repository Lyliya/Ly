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
    :class="[`ly-variant--${variant}`]"
    :disabled="disabled"
    v-bind="$attrs"
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
  --ly-button-color: white;
  --ly-button-padding-top: 8px;
  --ly-button-padding-right: 24px;
  --ly-button-padding-bottom: 8px;
  --ly-button-padding-left: 24px;
  --ly-button-border-radius: 8px;
  --ly-button-font-size: 18px;
  --ly-button-line-height: 28px;
  --ly-button-line-font-height: 500;
}

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

  //   &--success {
  //     background-color: var(--bg-success);

  //     &:hover {
  //       background-color: var(--bg-success-hover);
  //     }
  //   }

  //   &--danger {
  //     background-color: var(--bg-danger);
  //     &:hover {
  //       background-color: var(--bg-danger-hover);
  //     }
  //   }

  //   &--warning {
  //     background-color: var(--bg-warning);
  //     &:hover {
  //       background-color: var(--bg-warning-hover);
  //     }
  //   }
}
</style>
