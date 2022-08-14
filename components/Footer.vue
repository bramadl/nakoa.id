<script setup lang="ts">
const menuLinks = ref([
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/menus", text: "Menus" },
  { to: "/blogs", text: "Blogs" },
  { to: "/locations", text: "Locations" },
]);

const purchaseChannels = ref([
  { to: "#", text: "Shoppe" },
  { to: "#", text: "Grab" },
  { to: "#", text: "Gojek" },
]);
</script>

<template>
  <footer class="w-full h-auto bg-neutral-900 text-white">
    <div class="container mx-auto px-4 md:px-8 lg:px-12">
      <div class="flex flex-col lg:flex-row items-start justify-between gap-8 py-8 lg:py-16">
        <NuxtLink to="/">
          <img
            alt="Logo"
            class="w-16 h-16 object-cover"
            src="~/assets/img/logogram.png"
          />
        </NuxtLink>

        <!-- General Information -->
        <div class="flex flex-col gap-2">
          <p class="font-bold text-lg">Informasi Umum</p>
          <div class="flex flex-col gap-1">
            <p class="font-light text-sm">Buka hari senin - minggu</p>
            <p class="font-light text-sm">Buka jam 08.30 - 24.00</p>
            <p class="font-light text-sm">WA: 0812 3456 7890</p>
          </div>
        </div>
        <!-- ./General Information -->

        <!-- Main Menu -->
        <div class="flex flex-col gap-2">
          <p class="font-bold text-lg">Menu Utama</p>
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
        </div>
        <!-- ./Main Menu -->

        <!-- Purchase Channel -->
        <div class="flex flex-col gap-2">
          <p class="font-bold text-lg">Pesan Menu</p>
          <div class="flex flex-col gap-1">
            <a
              v-for="(channel, index) in purchaseChannels"
              :key="index"
              href="#"
              class="font-light text-sm hover:text-brand transition ease-out duration-300"
            >
              {{ channel.text }}
            </a>
          </div>
        </div>
        <!-- ./Purchase Channel -->

        <!-- Social Media -->
        <div class="flex flex-col gap-2">
          <p class="font-bold text-lg">Follow Us</p>
          <div class="flex items-center gap-4">
            <a href="#" class="font-light text-sm">
              <img
                class="w-8 h-8 object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                alt=""
              />
            </a>
            <a href="#" class="font-light text-sm">
              <img
                class="w-8 h-8 object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <!-- ./Social Media -->

        <div class="flex flex-col gap-2">
          <p class="font-bold text-lg">Scan menu kami</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/871/645/original/barcode-isolated-on-transparent-background-icon-free-vector.jpg"
            alt=""
            class="w-48 h-auto"
          />
        </div>
      </div>

      <!-- Attribution and Copyrights -->
      <div class="container mx-auto border-t border-white py-8">
        <p class="lg:text-center font-light text-xs lg:text-sm">
          &copy; 2022 Nakoa Cafe - All rights reserved. <br class="md:hidden"> Website made by
          <a
            href="https://fluxt.co"
            class="font-medium hover:text-brand transition ease-out duration-300"
          >
            Fluxt
          </a>
        </p>
      </div>
      <!-- ./Attribution and Copyrights -->
    </div>
  </footer>
</template>
