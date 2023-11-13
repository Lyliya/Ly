<script setup lang="ts">
import LyButton from "../LyButton.vue";
import { lyButtonVariants } from "../LyButton.type";
import { logEvent } from "histoire/client";
</script>

<template>
  <Story title="LyButton/IconOnly" :layout="{ type: 'grid', width: 400 }">
    <Variant v-for="variant in lyButtonVariants" :title="variant">
      <div style="display: flex; gap: 2rem">
        <LyButton
          :variant="variant"
          icon-only
          @click="logEvent('Click', $event)"
          ><span>✓</span></LyButton
        >
        <LyButton
          :variant="variant"
          rounded
          icon-only
          @click="logEvent('Click', $event)"
          ><span>✓</span></LyButton
        >
        <LyButton
          :variant="variant"
          rounded
          outline
          icon-only
          @click="logEvent('Click', $event)"
          ><span>✓</span></LyButton
        >
      </div>
    </Variant>
  </Story>
</template>
