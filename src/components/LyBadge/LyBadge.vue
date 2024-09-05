<script setup lang="ts">
import { computed, useSlots } from "vue";
import { useVariants } from "@/composables/useVariants";
import {
  lyBadgeSizes,
  lyBadgeVariants,
} from "@/components/LyBadge/LyBadge.type";
import { useSizes } from "@/composables/useSizes";

const props = defineProps({
  ...useSizes<typeof lyBadgeSizes>(),
  ...useVariants<typeof lyBadgeVariants>(),
  outline: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();

const badgeClass = computed(() => ({
  "ly-badge--outline": props.outline,
}));
</script>

<template>
  <div
    class="ly-badge"
    :class="[badgeClass, `ly-badge--${variant}`, `ly-badge--${size}`]"
  >
    <div class="ly-badge__content">
      <div v-if="slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <slot></slot>
      <div v-if="slots.append">
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  height: var(--ly-badge-height);
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  &--outline {
    background-color: transparent;
    color: var(--variant-color);
    border: 1px solid var(--variant-color);
  }
}
</style>
