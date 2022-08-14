<script setup lang="ts">
import { ConcreteComponent } from "vue";

type NavigationLinkType = {
  type: "link" | "logo";
  to: string;
  content: string | null;
}[];

const navigationLinks = ref<NavigationLinkType>([
  { type: "link", to: "/", content: "Home" },
  { type: "link", to: "/about", content: "About" },
  { type: "link", to: "/menus", content: "Menus" },
  { type: "logo", to: "/", content: null },
  { type: "link", to: "/blogs", content: "Blogs" },
  { type: "link", to: "/locations", content: "Locations" },
]);
</script>

<template>
  <nav class="z-10 absolute top-0 left-0 w-full bg-white text-slate-900">
    <ul class="h-20 grid grid-cols-7 items-center px-16">
      <li
        v-for="(link, index) in navigationLinks"
        :key="index"
        class="flex items-center justify-center"
      >
        <NuxtLink
          class="font-light hover:text-brand transition ease-out duration-300"
          :to="link.to"
        >
          <template v-if="link.type === 'link'">
            <span class="font-light text-sm uppercase">{{ link.content }}</span>
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
        <a href="#" class="bg-brand text-white py-3 px-4 rounded-md">Contact Us</a>
      </li>
    </ul>
  </nav>
</template>
