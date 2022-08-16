<script setup lang="ts">
import { ref } from 'vue';

const Facilities = ref([
  {
    icon: "bx bx-wifi",
    name: "Free Wifi",
  },
  {
    icon: "bx bx-donate-blood",
    name: "Westafel cuci tangan",
  },
  {
    icon: "bx bxs-flame",
    name: "Smoking Area",
  },
  {
    icon: "bx bx-male-female",
    name: "Toilet Umum",
  },
  {
    icon: "bx bx-wind",
    name: "Ruang AC",
  },
]);
const instagramPictures = ref([
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359235772-2W6OJCYTUD8RO9MU4L8E/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359236681-2472G2MEENVRUW4AH169/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359237196-HBF79NBBJYKLHI2XUGJG/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359235772-2W6OJCYTUD8RO9MU4L8E/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359236681-2472G2MEENVRUW4AH169/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/60be0295968e974e71404829/1624359237196-HBF79NBBJYKLHI2XUGJG/image-asset.jpeg?format=500w",
]);
const activeNakoa = ref("nakoa1");
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="lg:my-12">
      <section
        class="relative md:h-[60vh] flex flex-col md:flex-row items-center justify-between text-center"
      >
        <figure class="h-full basis-1/4">
          <img
            class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          />
        </figure>
        <div class="basis-1/3 flex flex-col gap-8 p-6 md:p-0">
          <span class="uppercase tracking-wide">What about us?</span>
          <h1 class="text-4xl font-bold tracking-wider">
            We roast daily and focus on sustainability from seed to cup.
          </h1>
          <p class="text-gray-600">
            Creating the best coffee experiences in the world while helping
            farmers achieve more value is what drives us.
          </p>
        </div>
        <figure class="h-full basis-1/4">
          <img
            class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
        </figure>
      </section>
      <div class="text-center">
        <i class="bx bx-down-arrow-alt text-4xl text-center hidden md:block" />
      </div>
    </div>
    <!-- ./Hero Section -->
    <!-- Our Story Section -->
    <section
      class="md:h-screen justify-between md:px-32 px-8 py-8 md:py-24
        flex flex-col gap-8 md:gap-0 md:flex-row text-white bg-brand"
    >
      <div class="flex flex-col justify-between md:basis-5/12">
        <div class="flex flex-col gap-4">
          <h2 class="text-6xl">Our History</h2>
          <p class="md:mt-8 text-sm md:text-base leading-6 md:leading-normal">
            Nakoa Cafe merupakan lokasi kuliner yang menyajikan aneka kopi dan
            minuman non kopi sebagai sajian utamanya. Berdiri sejak akhir tahun
            2019, Nakoa Cafe adalah salah satu cafe yang buka selama 24 jam non
            stop. Ini adalah cabang kedua yang berada di kawasan Dinoyo, setelah
            mengoperasikan cabang pertamanya di kawasan Jl, Bondowoso. Tempat
            nyaman dan harga terjangkau menjadi daya tarik utama Nakoa Cafe.
            Sebagian ruangnya adalah ruang terbuka hijau dengan banyak tanaman
            tropis dan hijau, menjadi spot favorit pengunjung. Penyajian cepat
            dengan kemasan praktis, semakin memudahkan pengunjung saat ingin
            menikmati di tempat atau membawanya pulang. Nakoa Cafe hanya
            menyajikan menu minuman dan snack, pengunjung tidak akan menemukan
            main course disini. Beberapa menu yang menjadi favorit, antara lain
            Es Kopi Susu Gula Aren, Cafe Latte, Cappuccino, dan Boba Brown
            Sugar.
          </p>
        </div>
        <div>
          <p class="md:mt-8 text-sm md:text-base leading-6 md:leading-normal">
            Dui sed ac egestas dui sollicitudin in integer a. At ante eget erat
            consectetur nibh. Lectus aenean metus
          </p>
        </div>
      </div>
      <div class="md:basis-6/12 flex flex-col gap-6 md:gap-0 justify-between">
        <img
          src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
        <p>
          Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur
          purus sit amet fermentum. Donec ullamcorper nulla non metus auctor
          fringilla.
        </p>
        <BaseActionButton
          class="self-start"
          to="/about"
          text="Baca lebih lanjut"
          :alternate="true"
        />
      </div>
    </section>
    <!-- ./Our Story Section -->
    <!-- Our Philosophy -->
    <section class="flex flex-col md:flex-row justify-between lg:px-32 lg:py-24 md:h-[80vh]">
      <div class="basis-6/12 p-8 md:p-0">
        <img
          src="https://images.unsplash.com/photo-1525616188-ccf49fddc5cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1250&q=80"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="basis-6/12 px-8 flex flex-col gap-8">
        <h2 class="text-6xl">Our Philosophy</h2>
        <p>
          SO MUCH MORE THAN A CUP OF COFFEE. At ante eget erat consectetur nibh.
          Lectus aenean metus dui interdum
        </p>
        <p class="tracking-wide">
          Duis vivamus et posuere eu. Nulla nam turpis amet odio. Velit, in
          dolor tincidunt quis vestibulum. Semper nisl mattis adipiscing justo
          aliquet rutrum pellentesque sed. Aliquam egestas id nec et dictumst
          pulvinar in. Venenatis lacus dolor non ut eu ut. Nam amet, commodo
          aliquet non. Sapien odio faucibus vulputate lorem scelerisque felis,
          posuere quis at.
        </p>
      </div>
    </section>
    <!-- ./Our Philosophy -->
    <!-- Our Variant Drink Section -->
    <section class="md:h-screen justify-between flex flex-col md:flex-row bg-brand">
      <div
        class="flex flex-col justify-between basis-6/12 bg-white p-8 lg:px-32 md:py-12"
      >
        <h2 class="text-4xl md:text-6xl">Coffee</h2>
        <img
          src="https://images.unsplash.com/photo-1535403396060-dd9daec50b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        />
        <p class="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          error nesciunt reprehenderit temporibus quaerat quisquam cupiditate
          eos sint impedit voluptate? Possimus dolores id provident dolorem.
        </p>
      </div>
      <div
        class="flex flex-col justify-between basis-6/12 bg-brand text-white p-8 lg:px-32 md:py-12"
      >
        <h2 class="text-4xl md:text-6xl">Non Coffee</h2>
        <img
          src="https://images.unsplash.com/photo-1583401495411-d693f393c074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        />
        <p class="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          error nesciunt reprehenderit temporibus quaerat quisquam cupiditate
          eos sint impedit voluptate? Possimus dolores id provident dolorem.
        </p>
      </div>
    </section>
    <!-- ./Our Variant Drink Section -->
    <!-- Team Credentials -->
    <section class="md:h-screen flex flex-col md:flex-row justify-between p-8 md:px-32 md:py-16">
      <div class="flex-1">
        <p class="uppercase font-bold text-center md:mb-24">Meet the Manager</p>
        <div class="flex flex-col items-center justify-center my-6 md:my-0 gap-6 md:gap-12 text-left">
          <div>
            <button
              @click="activeNakoa = 'nakoa1'"
              :class="activeNakoa === 'nakoa1' ? 'border-b-2 border-brand' : ''"
              class="relative transition-all duration-150 p-2"
            >
              <p class="text-xl md:text-3xl">Manager Nakoa Cafe Bondowoso</p>
            </button>
          </div>
          <div>
            <button
              @click="activeNakoa = 'nakoa2'"
              :class="activeNakoa === 'nakoa2' ? 'border-b-2 border-brand' : ''"
              class="relative transition-all duration-150 p-2"
            >
              <p class="text-xl md:text-3xl">Manager Nakoa Cafe Watugong</p>
            </button>
          </div>
          <div>
            <button
              @click="activeNakoa = 'nakoa3'"
              :class="activeNakoa === 'nakoa3' ? 'border-b-2 border-brand' : ''"
              class="relative transition-all duration-150 p-2"
            >
              <p class="text-xl md:text-3xl">Manager Nakoa Cafe Suhat</p>
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <Transition name="fade">
          <img
            v-if="activeNakoa === 'nakoa1'"
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          />
        </Transition>
        <Transition name="fade">
          <img
            v-if="activeNakoa === 'nakoa2'"
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          />
        </Transition>
        <Transition name="fade">
          <img
            v-if="activeNakoa === 'nakoa3'"
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1627161684458-a62da52b51c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80"
          />
        </Transition>
      </div>
    </section>
    <!-- ./Team Credentials -->
    <!-- Facilites Section -->
    <section
      class="relative w-full bg-brand text-white"
    >
      <div class="container flex flex-col gap-8 mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-16">
        <h3 class="uppercase text-white text-center text-2xl md:text-4xl font-bold">Fasilitas Kami</h3>
        <div class="grid grid-cols-2 text-center md:grid-cols-5 gap-4 md:gap-8 lg:gap-16">
          <FacilityCard
            v-for="detail in Facilities"
            :key="detail.icon"
            :detail="detail"
          />
        </div>
      </div>
    </section>
    <!-- ./Facilites Section -->
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
