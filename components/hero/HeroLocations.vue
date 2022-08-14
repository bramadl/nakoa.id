<script setup lang="ts">
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
</script>

<template>
  <div class="w-full h-auto absolute left-1/2 bottom-0 -translate-x-1/2">
    <div class="container mx-auto py-12 border-t border-white">
      <div class="grid grid-cols-3 gap-16">
        <div
          v-for="location in nakoaLocations"
          :key="location.address"
          class="flex flex-col gap-4 text-center text-sm"
        >
          <h2 class="font-medium uppercase">{{ location.name }}</h2>
          <p class="w-3/4 mx-auto font-light">{{ location.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
