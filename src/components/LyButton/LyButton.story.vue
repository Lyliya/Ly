<script setup lang="ts">
import LyButton from "./LyButton.vue";
import { logEvent } from "histoire/client";
</script>

<template>
  <Story title="LyButton" :layout="{ type: 'grid', width: 200 }">
    <Variant title="success">
      <LyButton variant="success" @click="logEvent('Click', $event)"
        >Success</LyButton
      >
    </Variant>
    <Variant title="warning">
      <LyButton variant="warning" @click="logEvent('Click', $event)"
        >Warning</LyButton
      >
    </Variant>
    <Variant title="danger">
      <LyButton variant="danger" @click="logEvent('Click', $event)"
        >Danger</LyButton
      >
    </Variant>
    <Variant title="disabled">
      <LyButton disabled>Danger</LyButton>
    </Variant>
  </Story>
</template>
