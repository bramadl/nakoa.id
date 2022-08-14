<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <p class="font-bold text-lg">
    {{ text }}
  </p>
</template>
