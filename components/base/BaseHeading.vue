<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p class="font-light uppercase tracking-wider">{{ text }}</p>
</template>
