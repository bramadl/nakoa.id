<script setup lang="ts">
type CafeLocationProp = {
  location: {
    address: string;
    mapSrc: string;
    name: string;
  };
};

defineProps<CafeLocationProp>();
</script>

<template>
  <div class="relative w-full h-full">
    <div class="z-[1] absolute top-20 left-20 group">
      <BaseActionButton alternate text="Lihat Lokasi" to="#" />
    </div>
    <figure class="w-full h-full relative">
      <div class="absolute left-0 top-0 w-full h-full bg-black/50" />
      <img
        src="https://1.bp.blogspot.com/-AMQxqLQqx3c/Xm8p_Wh9bDI/AAAAAAAAGB0/G_fLMufG5_QGXc2ZSCpiUNS-kenNP1gyACLcBGAsYHQ/s1600/nakoa-cafe-rekomendasi-tempat-nongkrong-di-malang-24-jam.jpg"
        alt="Lokasi Utama"
        class="w-full h-full object-cover"
      />
    </figure>
    <div class="z-[1] absolute bottom-20 left-20">
      <h3 class="text-4xl font-medium">{{ location.name }}</h3>
      <p class="font-light">{{ location.address }}</p>
    </div>
  </div>
</template>
