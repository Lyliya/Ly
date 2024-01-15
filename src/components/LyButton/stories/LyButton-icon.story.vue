<script setup lang="ts">
import LyButton from "../LyButton.vue";
import { lyButtonVariants } from "../LyButton.type";
import { logEvent } from "histoire/client";
</script>

<template>
  <Story title="LyButton/Icon" :layout="{ type: 'grid', width: 800 }">
    <Variant v-for="variant in lyButtonVariants" :title="variant">
      <div style="display: flex; gap: 2rem">
        <LyButton :variant="variant" @click="logEvent('Click', $event)">
          <template #icon>✓</template>
        </LyButton>
        <LyButton :variant="variant" rounded @click="logEvent('Click', $event)">
          <template #icon>✓</template>
        </LyButton>
        <LyButton
          :variant="variant"
          rounded
          outline
          @click="logEvent('Click', $event)"
        >
          <template #icon>✓</template>
        </LyButton>
        <LyButton :variant="variant" @click="logEvent('Click', $event)">
          <template #prepend>✓</template>
          Prepend
        </LyButton>
        <LyButton :variant="variant" @click="logEvent('Click', $event)">
          <template #append>✓</template>
          Append
        </LyButton>
      </div>
    </Variant>
  </Story>
</template>
