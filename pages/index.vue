<script setup lang="ts">
useHead({
  title: "Nakoa Café",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "Tempat nongkrong nyaman dan ramah di kantong",
    },
  ],
});
</script>

<template>
  <div>
    <Navigation />
    <SectionHero />
    <SectionAbout />
    <SectionLocation />
    <SectionBestSeller />
    <SectionCafeDetail />
    <SectionGallery />
    <Footer />
  </div>
</template>
