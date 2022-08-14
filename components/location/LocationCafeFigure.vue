<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

type LocationCafeFigureProps = {
  cafePictures: string[];
  onSwiper: (swiper: any) => void;
  onSlideChange: () => void;
}

defineProps<LocationCafeFigureProps>()
</script>

<template>
  <div class="flex-1 flex flex-col justify-between overflow-hidden">
    <swiper
      class="w-[400px] h-full mx-auto"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChangeTransitionEnd="onSlideChange"
    >
      <swiper-slide v-for="picture in cafePictures" :key="picture">
        <img class="w-full h-full object-cover" :src="picture" />
      </swiper-slide>
    </swiper>
  </div>
</template>
