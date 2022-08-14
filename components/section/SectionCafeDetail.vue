<script setup lang="ts">
const cafeDetails = ref([
  {
    name: "Coffee",
    description: "All our coffee selections in hot, iced, and frappe",
    amount: 18,
  },
  {
    name: "Non-coffee",
    description: "Our non-coffee beverages in hot, iced, and frappe",
    amount: 25,
  },
  {
    name: "Snack",
    description: "Mouthwatering sweet & savory snack selections",
    amount: 20,
  },
]);
</script>

<template>
  <section class="relative w-full h-auto bg-neutral-900 text-white">
    <div class="container mx-auto py-16">
      <div class="grid grid-cols-3 gap-24">
        <MenuCafeDetailCard
          v-for="detail in cafeDetails"
          :key="detail.name"
          :detail="detail"
        />
      </div>
    </div>
  </section>
</template>
