<script setup lang="ts">
import LyButton from "../LyButton.vue";
import { lyButtonVariants } from "../LyButton.type";
import { logEvent } from "histoire/client";
</script>

<template>
  <Story title="LyButton/Variants" :layout="{ type: 'grid', width: 200 }">
    <Variant v-for="variant in lyButtonVariants" :title="variant">
      <LyButton :variant="variant" @click="logEvent('Click', $event)">
        Button
      </LyButton>
    </Variant>
  </Story>
</template>
