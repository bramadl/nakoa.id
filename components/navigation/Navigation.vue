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
  <nav class="z-10 absolute top-0 left-0 w-full h-20">
    <div class="w-full h-full flex items-center justify-between bg-white text-slate-900">
      <NavigationList>
        <NavigationListItem
          v-for="(link, index) in navigationLinks"
          :key="index"
        >
          <NavigationLink :to="link.to">
            <template v-if="link.type === 'link'">
              {{ link.content }}
            </template>
            <template v-else>
              <NakoaBrandLogo />
            </template>
          </NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <ContactUsButton />
        </NavigationListItem>
      </NavigationList>
    </div>
  </nav>
</template>
