<script setup lang="ts">
const instagramPictures = useInstagramPictures();
</script>

<template>
  <div>
    <Navigation />

    <slot />

    <!-- Gallery Section -->
    <section class="relative w-full bg-white text-slate-900">
      <div
        class="container mx-auto flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-8 lg:py-16"
      >
        <BaseHeader>
          <template #title>
            <BaseHeading text="Instagram Kami" />
          </template>
          <template #action>
            <a href="#" class="text-brand">@nakoacafe</a>
          </template>
        </BaseHeader>

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8"
        >
          <img
            v-for="img in instagramPictures"
            :src="img"
            alt="Instagram Picture"
          />
        </div>
      </div>
    </section>
    <!-- ./Gallery Section -->

    <Footer />
  </div>
</template>
