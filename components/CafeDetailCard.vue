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
  <div class="flex flex-col items-start md:items-center justify-center gap-3 lg:gap-4 md:text-center">
    <p class="relative">
      <span class="text-2xl lg:text-3xl tracking-wide font-bold uppercase">{{ detail.name }} ({{ detail.amount }})</span>
    </p>
    <p class="font-light text-sm">
      {{ detail.description }}
    </p>
  </div>
</template>
