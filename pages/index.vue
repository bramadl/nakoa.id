<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

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

type NakoaLocationType = {
  name: string;
  address: string;
}[];

const nakoaLocations = ref<NakoaLocationType>([
  {
    name: "Nakoa Cafe Bondowoso",
    address:
      "Jl. Bondowoso No.14, Gading Kasri, Kec. Klojen, Kota Malang 65115",
  },
  {
    name: "Nakoa Cafe Watugong",
    address:
      "Jl. MT. Haryono No.116, Ketawanggede, Kec. Lowokwaru, Kota Malang 65144",
  },
  {
    name: "Nakoa Cafe Suhat",
    address:
      "Jl. Puncak Borobudur G502, Mojolangu, Kec. Lowokwaru, Kota Malang 65142",
  },
]);

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

const bestSellerMenus = ref([
  {
    name: "Kopi Susu Gula Aren",
    thumbnail:
      "https://nakoa.id/themes/laratify-octobercms-octaskin/assets/img/pages/menu/mainpage/img%20(1).jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo quidem blanditiis qui. Voluptates ipsam nihil.",
    price: "Rp 20.000",
  },
  {
    name: "Strawberry Vanilla with Ice Cream",
    thumbnail:
      "https://nakoa.id/themes/laratify-octobercms-octaskin/assets/img/pages/menu/mainpage/img%20(2).jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo quidem blanditiis qui. Voluptates ipsam nihil.",
    price: "Rp 20.000",
  },
  {
    name: "Signature Dark Chocolate",
    thumbnail:
      "https://nakoa.id/themes/laratify-octobercms-octaskin/assets/img/pages/menu/mainpage/img%20(3).jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo quidem blanditiis qui. Voluptates ipsam nihil.",
    price: "Rp 20.000",
  },
]);

const cafeDetails = useCafeDetails();

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
  <div>
    <!-- Hero Section -->
    <section
      id="hero-section"
      class="relative w-full h-screen bg-neutral-900 text-white"
    >
      <!-- Nakoa Brand Video -->
      <div class="relative w-full h-full">
        <div class="absolute left-0 top-0 w-full h-full bg-black/50" />
        <video class="w-full h-full object-cover" allowfullscreen autoplay muted loop>
          <source src="https://assets-storage-bucket.s3.ap-southeast-1.amazonaws.com/branding.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- Nakoa Brand Video -->

      <!-- Hero Title -->
      <div class="w-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div class="container mx-auto -mt-10 md:-mt-16 px-4 md:px-8 lg:px-12">
          <div class="flex flex-col items-center justify-center gap-4 text-center">
            <h1 class="font-bold text-5xl md:text-8xl">Nakoa Cafe</h1>
            <p class="font-light text-xl md:text-2xl">
              Tempat nongkrong nyaman dan ramah di kantong
            </p>
          </div>
        </div>
      </div>
      <!-- ./Hero Title -->

      <!-- Hero Locations -->
      <div class="w-full absolute left-1/2 bottom-0 -translate-x-1/2">
        <div class="hidden md:block container mx-auto px-4 md:px-8 lg:px-12">
          <div class="grid grid-cols-3 gap-8 lg:gap-16 py-12 border-t border-white">
            <div
              v-for="location in nakoaLocations"
              :key="location.address"
              class="flex flex-col gap-4 text-center text-sm"
            >
              <h2 class="font-medium uppercase">{{ location.name }}</h2>
              <p class="md:w-3/4 mx-auto font-light">{{ location.address }}</p>
            </div>
          </div>
        </div>

        <!-- Location but Carousel Version -->
        <div class="md:hidden container mx-auto px-4 md:px-8 lg:px-12 py-6">
          <swiper :slides-per-view="1">
            <swiper-slide
              v-for="location in nakoaLocations"
              :key="location.name"
            >
              <div class="flex flex-col gap-4 text-center text-sm">
                <h2 class="font-medium uppercase">{{ location.name }}</h2>
                <p class="font-light">{{ location.address }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- ./Location but Carousel Version -->
      </div>
      <!-- ./Hero Locations -->
    </section>
    <!-- ./Hero Section -->

    <!-- About Section -->
    <section
      id="about-section"
      class="relative w-full lg:h-screen bg-white text-slate-900"
    >
      <div
        class="h-full container mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-8 lg:px-12 py-8 md:py-16"
      >
        <!-- About and Vision Overview -->
        <div class="md:w-7/12 lg:w-8/12 h-full flex flex-col gap-8 md:gap-16">
          <div class="flex flex-col gap-4 md:gap-8">
            <BaseHeading text="Apa Itu Nakoa?" />
            <h2 class="font-bold text-4xl md:text-6xl">
              Tentang, Visi dan Kultur Nakoa
            </h2>
          </div>
          <div class="flex-1 w-full overflow-hidden">
            <div
              class="h-full flex flex-col lg:flex-row items-start gap-4 md:gap-8"
            >
              <article
                class="order-2 lg:order-1 flex-1 h-full flex flex-col justify-between gap-6"
              >
                <BaseParagraph>
                  Tempor, tellus ac, imperdiet nec pulvinar faucibus sagittis
                  orci. Cras vitae, quam arcu ullamcorper. Enim, cum blandit
                  facilisi in. Cras sem nulla sit tortor nec. Mattis quis purus
                  dolor ante rhoncus commodo consectetur sollicitudin.
                </BaseParagraph>
                <BaseActionButton
                  class="self-start"
                  to="/about"
                  text="Baca lebih lanjut"
                />
              </article>
              <figure
                class="order-1 lg:order-2 w-full aspect-video md:flex-1 md:h-full overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80"
                  alt="TITIT BESAR ALASKAAAA"
                  class="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
        <!-- ./About and Vision Overview -->

        <!-- About Nakoa Culture -->
        <div class="flex-1 flex flex-col gap-8 md:gap-16 border-l border-slate-900 pl-4 md:pl-8">
          <figure class="border w-full max-h-96 overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1623226628870-RZ5VYT6T6HRVKYORQBVE/bonanza_shop_sq2.jpg?format=750w"
              alt="PELIR MAAA"
              class="w-full h-full object-cover"
            />
          </figure>
          <article>
            <BaseParagraph>
              Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur
              purus sit amet fermentum. Donec ullamcorper nulla non metus auctor
              fringilla.
            </BaseParagraph>
          </article>
        </div>
        <!-- ./About Nakoa Culture -->
      </div>
    </section>
    <!-- ./About Section -->

    <!-- Section Location -->
    <section
      id="location-section"
      class="relative w-full lg:h-screen bg-neutral-900 text-white"
    >
      <div class="w-full lg:h-full flex flex-col lg:flex-row">
        <!-- Location Information -->
        <div class="relative lg:flex-1 w-full h-60 md:h-96 lg:h-full overflow-hidden">
          <div class="z-[1] absolute top-4 left-4 md:top-8 md:left-8 lg:top-16 lg:left-16 group">
            <BaseActionButton alternate text="Lihat Lokasi" to="#" />
          </div>
          <figure class="relative w-full h-full">
            <div class="absolute left-0 top-0 w-full h-full bg-black/50" />
            <img
              src="https://1.bp.blogspot.com/-AMQxqLQqx3c/Xm8p_Wh9bDI/AAAAAAAAGB0/G_fLMufG5_QGXc2ZSCpiUNS-kenNP1gyACLcBGAsYHQ/s1600/nakoa-cafe-rekomendasi-tempat-nongkrong-di-malang-24-jam.jpg"
              alt="Lokasi Utama"
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="z-[1] absolute right-4 bottom-4 left-4 md:right-8 md:left-8 md:bottom-8 lg:right-16 lg:bottom-16 lg:left-16">
            <h3 class="text-xl md:text-2xl lg:text-4xl font-medium">
              {{ locations[swiperIndex].name }}
            </h3>
            <p class="font-light text-sm md:text-base">
              {{ locations[swiperIndex].address }}
            </p>
          </div>
        </div>
        <!-- ./Location Information -->

        <div class="relative flex-1 lg:h-full">
          <div class="h-full flex flex-col gap-4 md:gap-8 lg:gap-16 px-4 md:px-8 lg:px-12 py-8 md:py-16">
            <div class="flex-1 flex flex-col justify-between overflow-hidden">
              <swiper
                class="w-full lg:w-[400px] h-full mx-auto"
                :slides-per-view="1"
                @swiper="onSwiper"
                @slideChangeTransitionEnd="onSlideChange"
              >
                <swiper-slide v-for="picture in cafePictures" :key="picture">
                  <img
                    class="w-full aspect-video lg:h-full object-cover"
                    :src="picture"
                  />
                </swiper-slide>
              </swiper>
            </div>

            <div
              class="w-full lg:w-[400px] mx-auto flex items-center justify-between"
            >
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
    <!-- ./Section Location -->

    <!-- Menu Section -->
    <section id="menu-section" class="relative w-full bg-white text-slate-900">
      <div class="container mx-auto flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-8 lg:py-16">
        <BaseHeader>
          <template #title> <BaseHeading text="Menu Best Seller" /> </template>
          <template #action>
            <a href="#" class="text-brand">Lihat Menu</a>
          </template>
        </BaseHeader>

        <div class="grid md:grid-cols-3 gap-8 lg:gap-16">
          <BestSellerCard
            v-for="menu in bestSellerMenus"
            :key="menu.name"
            :menu="menu"
          />
        </div>
      </div>
    </section>
    <!-- ./Menu Section -->

    <!-- Cafe Detail Section -->
    <section
      id="cafe-detail-section"
      class="relative w-full bg-neutral-900 text-white"
    >
      <div class="container mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div class="grid md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
          <CafeDetailCard
            v-for="detail in cafeDetails"
            :key="detail.name"
            :detail="detail"
          />
        </div>
      </div>
    </section>
    <!-- ./Cafe Detail Section -->
  </div>
</template>
