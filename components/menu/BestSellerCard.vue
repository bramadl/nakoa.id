<script setup lang="ts">
type MenuBestSellerProps = {
  menu: {
    name: string;
    thumbnail: string;
    description: string;
    price: string | number;
  };
};

defineProps<MenuBestSellerProps>();
</script>

<template>
  <div class="flex flex-col items-start gap-6">
    <figure class="relative group">
      <div class="opacity-0 group-hover:opacity-100 transition ease-out duration-300">
        <div class="absolute left-0 top-0 w-full h-full bg-black/75">
          <div class="w-full h-full flex items-center justify-center text-white">
            <NuxtLink
              to="/menus"
              class="py-3 px-4 border border-white text-white hover:bg-white hover:text-slate-900 transition ease-out duration-300"
            >
              Baca Lanjut
            </NuxtLink>
          </div>
        </div>
      </div>
      <img
        :alt="menu.name"
        class="w-full h-96 object-cover"
        :src="menu.thumbnail"
      />
    </figure>
    <div class="flex flex-col gap-4">
      <h3 class="text-2xl tracking-wide font-medium">{{ menu.name }}</h3>
      <p class="font-light text-sm tracking-wide leading-[1.5]">
        {{ menu.description }}
      </p>
    </div>
    <BaseActionButton :text="(menu.price as string)" />
  </div>
</template>
