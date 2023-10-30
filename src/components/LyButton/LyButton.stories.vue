<script setup lang="ts">
import { LyButton } from "@/index";
</script>

<template>
  <Story title="LyButton">
    <Variant title="success">
      <LyButton>Hello World!</LyButton>
    </Variant>
    <Variant title="danger">
      <LyButton variant="danger">Hello World!</LyButton>
    </Variant>
  </Story>
</template>
