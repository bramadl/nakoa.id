<script setup lang="ts">
type FacilityProps = {
  detail: {
    icon: string;
    name: string;
  };
};

defineProps<FacilityProps>();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3 lg:gap-4 md:text-center">
    <p class="relative p-2 hover:bg-white hover:text-brand hover:rounded-md transition ease-in-out duration-300">
      <span class="text-2xl lg:text-3xl tracking-wide font-bold uppercase"><i :class='detail.icon' /></span>
      <p class=" tracking-wide font-bold">{{ detail.name }}</p>
    </p>
  </div>
</template>
