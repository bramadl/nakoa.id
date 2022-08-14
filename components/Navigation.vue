<script setup lang="ts">
import { ConcreteComponent } from "vue";

type NavigationLinkType = {
  type: "link" | "logo";
  to: string;
  content: string | null;
}[];

const navigationLinks = ref<NavigationLinkType>([
  { type: "link", to: "/", content: "Beranda" },
  { type: "link", to: "/tentang", content: "Tentang" },
  { type: "link", to: "/menus", content: "Menu" },
  { type: "logo", to: "/", content: null },
  { type: "link", to: "/blogs", content: "Artikel" },
  { type: "link", to: "/lokasi", content: "Lokasi" },
]);
</script>

<template>
  <nav class="z-10 absolute top-0 left-0 w-full bg-white text-slate-900 shadow-md">
    <ul class="h-20 flex md:grid grid-cols-7 items-center justify-between px-4 lg:px-16">
      <li
        v-for="(link, index) in navigationLinks"
        :key="index"
        class="flex items-center justify-center"
        :class="{ 'hidden md:flex': link.type === 'link' }"
      >
        <NuxtLink
          exact-active-class="!font-normal text-brand"
          class="font-light hover:text-brand transition ease-out duration-300"
          :to="link.to"
        >
          <template v-if="link.type === 'link'">
            <span class="text-sm uppercase">{{ link.content }}</span>
          </template>
          <template v-else>
            <img
              alt="Logo"
              class="w-auto h-10 object-cover"
              src="~/assets/img/logo.png"
            />
          </template>
        </NuxtLink>
      </li>
      <li class="flex items-center justify-center uppercase text-sm font-light">
        <a
          href="#"
          class="hidden md:inline-block border border-brand text-brand hover:bg-brand hover:text-white py-3 px-4 transition ease-out duration-300"
          >
            <span class="hidden lg:inline-block">Hubungi Kami</span>
            <i class="bx bxs-phone lg:hidden"></i>
          </a
        >
        <NavigationMenu />
      </li>
    </ul>
  </nav>
</template>
