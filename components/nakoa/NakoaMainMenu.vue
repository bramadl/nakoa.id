<script setup lang="ts">
type MenuLinkType = {
  to: string;
  text: string;
}[]

const menuLinks = ref<MenuLinkType>([
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/menus', text: 'Menus' },
  { to: '/blogs', text: 'Blogs' },
  { to: '/locations', text: 'Locations' },
])
</script>

<template>
  <div class="flex flex-col gap-1">
    <NuxtLink
      v-for="link in menuLinks"
      :key="link.to"
      class="font-light text-sm hover:text-brand transition ease-out duration-300"
      :to="link.to"
    >
      {{ link.text }}
    </NuxtLink>
  </div>
</template>
