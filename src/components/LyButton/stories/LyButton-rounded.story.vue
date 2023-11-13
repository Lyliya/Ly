<script setup lang="ts">
import LyButton from "../LyButton.vue";
import { lyButtonVariants } from "../LyButton.type";
import { logEvent } from "histoire/client";
</script>

<template>
  <Story title="LyButton/Rounded" :layout="{ type: 'grid', width: 200 }">
    <Variant v-for="variant in lyButtonVariants" :title="`${variant} rounded`">
      <LyButton :variant="variant" rounded @click="logEvent('Click', $event)"
        ><span>{{ variant }}</span></LyButton
      >
    </Variant>
  </Story>
</template>
