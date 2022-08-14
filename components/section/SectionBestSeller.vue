<script setup lang="ts">
const bestSellerMenus = ref([
  {
    name: "Kopi Susu Gula Aren",
    thumbnail:
      "https://nakoa.id/themes/laratify-octobercms-octaskin/assets/img/pages/menu/mainpage/img%20(1).jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo quidem blanditiis qui. Voluptates ipsam nihil, hic reiciendis in ratione molestiae animi alias nulla?",
    price: "Rp 20.000",
  },
  {
    name: "Strawberry Vanilla with Ice Cream",
    thumbnail:
      "https://nakoa.id/themes/laratify-octobercms-octaskin/assets/img/pages/menu/mainpage/img%20(2).jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo quidem blanditiis qui. Voluptates ipsam nihil, hic reiciendis in ratione molestiae animi alias nulla?",
    price: "Rp 20.000",
  },
  {
    name: "Signature Dark Chocolate",
    thumbnail:
      "https://nakoa.id/themes/laratify-octobercms-octaskin/assets/img/pages/menu/mainpage/img%20(3).jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo quidem blanditiis qui. Voluptates ipsam nihil, hic reiciendis in ratione molestiae animi alias nulla?",
    price: "Rp 20.000",
  },
]);
</script>

<template>
  <section class="relative w-full h-screen bg-white text-slate-900">
    <div class="container mx-auto flex flex-col gap-8 py-16">
      <BaseHeader>
        <template #title> <BaseHeading text="Menu Best Seller" /> </template>
        <template #action>
          <a href="#" class="text-brand">Lihat Menu</a>
        </template>
      </BaseHeader>
      <div class="grid grid-cols-3 gap-16">
        <MenuBestSellerCard
          v-for="menu in bestSellerMenus"
          :key="menu.name"
          :menu="menu"
        />
      </div>
    </div>
  </section>
</template>
