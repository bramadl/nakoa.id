<script setup lang="ts">
const instagramPictures = ref([
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359235772-2W6OJCYTUD8RO9MU4L8E/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359236681-2472G2MEENVRUW4AH169/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359237196-HBF79NBBJYKLHI2XUGJG/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359235772-2W6OJCYTUD8RO9MU4L8E/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359236681-2472G2MEENVRUW4AH169/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359237196-HBF79NBBJYKLHI2XUGJG/image-asset.jpeg?format=500w",
]);
</script>

<template>
  <section class="relative w-full h-auto bg-white text-slate-900">
    <div class="container mx-auto flex flex-col gap-8 py-16">
      <BaseHeader>
        <template #title>
          <BaseHeading text="Ikuti kami di Instagram" />
        </template>
        <template #action>
          <a href="#" class="text-brand">@nakoacafe</a>
        </template>
      </BaseHeader>
      <div class="grid grid-cols-6 gap-8">
        <img
          v-for="img in instagramPictures"
          :src="img"
          alt="Instagram Picture"
        />
      </div>
    </div>
  </section>
</template>
