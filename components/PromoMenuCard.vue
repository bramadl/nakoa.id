<script setup lang="ts">
type PromoMenuProps = {
  menu: {
    name: string;
    thumbnail: string;
    description: string;
    originalPrice: number;
    price: number;
  };
};

defineProps<PromoMenuProps>();
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <figure class="relative w-full aspect-square group">
      <img
        :alt="menu.name"
        class="w-full h-full object-cover"
        :src="menu.thumbnail"
      />
    </figure>

    <div class="flex flex-col gap-4">
      <h3 class="text-2xl tracking-wide font-medium">{{ menu.name }}</h3>
      <p class="font-light text-sm tracking-wide leading-[1.5]">
        {{ menu.description }}
      </p>
      <div class="flex items-center justify-between">
        <div>
          <p class="font-bold text-xl">{{ useFormatRupiah(menu.price) }}</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="px-1 rounded bg-brand">
            <span class="font-medium text-white text-sm">
              Hemat {{ useFormatRupiah(menu.originalPrice - menu.price) }}
            </span>
          </div>
          <p class="line-through text-neutral-400 text-sm">{{ useFormatRupiah(menu.originalPrice) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
