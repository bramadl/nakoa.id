<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    class="font-light hover:text-brand transition ease-out duration-300"
    :to="to"
  >
    <slot />
  </NuxtLink>
</template>
