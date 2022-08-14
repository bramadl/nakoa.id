<script setup lang="ts">
const swiperInstance = ref(null);
const swiperIndex = ref<number>(0);

const cafePictures = ref([
  "https://wisata-batumalang.com/wp-content/uploads/2020/09/nakoa1-1024x768.jpg",
  "https://www.malangculinary.com/upload/img_15944486021.jpg",
  "https://idnwisata.com/wp-content/uploads/2020/10/nakoa-cafe.jpg",
]);

const locations = ref([
  {
    mapSrc: "#",
    name: "Nakoa Cafe Bondowoso",
    address:
      "Jl. Bondowoso No.14, Gading Kasri, Kec. Klojen, Kota Malang 65115",
  },
  {
    mapSrc: "#",
    name: "Nakoa Cafe Watugong",
    address:
      "Jl. MT. Haryono No.116, Ketawanggede, Kec. Lowokwaru, Kota Malang 65144",
  },
  {
    mapSrc: "#",
    name: "Nakoa Cafe Suhat",
    address:
      "Jl. Puncak Borobudur G502, Mojolangu, Kec. Lowokwaru, Kota Malang 65142",
  },
]);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const onSlideChange = () => {
  const index = swiperInstance.value.realIndex;
  swiperIndex.value = index;
};

const onSlidePrev = () => {
  if (swiperInstance.value.isBeginning) {
    swiperInstance.value.slideTo(2);
  } else {
    swiperInstance.value.slidePrev();
  }
};

const onSlideNext = () => {
  if (swiperInstance.value.isEnd) {
    swiperInstance.value.slideTo(0);
  } else {
    swiperInstance.value.slideNext();
  }
};
</script>

<template>
  <section class="relative w-full h-screen bg-neutral-900 text-white">
    <div class="w-full h-full grid grid-cols-2">
      <LocationWideFigure :location="locations[swiperIndex]" />

      <div class="relative w-full h-full">
        <div class="h-full flex flex-col gap-20 p-20">
          <LocationCafeFigure
            :cafe-pictures="cafePictures"
            :onSwiper="onSwiper"
            :onSlideChange="onSlideChange"
          />
          <div class="w-[400px] mx-auto flex items-center justify-between">
            <button @click="onSlidePrev()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div class="flex items-center gap-2">
              <span>{{ swiperIndex + 1 }}</span>
              <span>/</span>
              <span>3</span>
            </div>
            <button @click="onSlideNext()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
