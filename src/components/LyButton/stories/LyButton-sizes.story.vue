<script setup lang="ts">
import LyButton from "../LyButton.vue";
import { lyButtonSizes } from "../LyButton.type";
import { logEvent } from "histoire/client";
</script>

<template>
  <Story title="LyButton/Sizes" :layout="{ type: 'grid', width: 200 }">
    <Variant v-for="size in lyButtonSizes" :title="size">
      <LyButton :size="size" @click="logEvent('Click', $event)">
        {{ size }}
      </LyButton>
    </Variant>
  </Story>
</template>
