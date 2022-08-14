<script setup lang="ts">
type MenuCardDetailProps = {
  detail: {
    name: string;
    description: string;
    amount: number;
  };
};

defineProps<MenuCardDetailProps>();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <p class="relative">
      <span
        class="after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 after:border-white"
      />
      <span class="text-3xl tracking-wide">{{ detail.name }}</span>
    </p>
    <p class="font-light text-sm">
      {{ detail.description }}
    </p>
    <p class="text-4xl font-bold">{{ detail.amount }}</p>
  </div>
</template>
