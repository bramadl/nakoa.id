<script setup lang="ts">
const cafeDetails = useCafeDetails();
</script>

<template>
  <div>
    <div class="mt-20"></div>

    <!-- Menu Section -->
    <section
      id="location-section"
      class="relative w-full bg-white text-slate-900"
    >
      <div
        class="container mx-auto flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-8 lg:py-16"
      >
        <BaseHeader>
          <template #title> <BaseHeading text="Lokasi Kafe Kami" /> </template>
        </BaseHeader>

        <article class="flex justify-between gap-8">
          <div class="grid lg:grid-cols-3 gap-6 lg:gap-12">
            <div>
              <h2
                class="uppercase font-medium text-2xl text-brand tracking-wider"
              >
                Nakoa Cafe Bondowoso
              </h2>
              <div class="my-3 border-b border-brand" />
              <p class="font-light text-sm underline">
                Jl. Bondowoso No.14, Gading Kasri, Kec. Klojen, Kota Malang
                65115
              </p>
              <p class="font-light text-sm">Senin - Minggu</p>
              <p class="font-light text-sm">Jam 08.00 - 00.00 WIB</p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.302311533021!2d112.61417011477918!3d-7.9676766942613595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788283d7291917%3A0xf5c09e234f3c9fd4!2sJl.%20Bondowoso%20No.14%2C%20Gading%20Kasri%2C%20Kec.%20Klojen%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065115!5e0!3m2!1sen!2sid!4v1660511298770!5m2!1sen!2sid"
                style="border: 0"
                class="w-full aspect-video mt-6"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <h2
                class="uppercase font-medium text-2xl text-brand tracking-wider"
              >
                Nakoa Cafe Watugong
              </h2>
              <div class="my-3 border-b border-brand" />
              <p class="font-light text-sm underline">
                Jl. MT. Haryono No.116, Ketawanggede, Kec. Lowokwaru, Kota
                Malang 65144
              </p>
              <p class="font-light text-sm">Senin - Minggu</p>
              <p class="font-light text-sm">Jam 08.00 - 00.00 WIB</p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5043516857295!2d112.61046251488202!3d-7.946717881365951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78820d48f4180d%3A0x7c05dd8a258d62b7!2sJl.%20MT.%20Haryono%20No.116%2C%20Dinoyo%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065144!5e0!3m2!1sen!2sid!4v1660511330263!5m2!1sen!2sid"
                style="border: 0"
                class="w-full aspect-video mt-6"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <h2
                class="uppercase font-medium text-2xl text-brand tracking-wider"
              >
                Nakoa Cafe Suhat
              </h2>
              <div class="my-3 border-b border-brand" />
              <p class="font-light text-sm underline">
                Jl. Puncak Borobudur G502, Mojolangu, Kec. Lowokwaru, Kota
                Malang 65142
              </p>
              <p class="font-light text-sm">Senin - Minggu</p>
              <p class="font-light text-sm">Jam 08.00 - 00.00 WIB</p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.6231333884352!2d112.61843101488205!3d-7.9343702812149175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629e6ab408443%3A0x3562164380e2f881!2sJl.%20Puncak%20Borobudur%2C%20Mojolangu%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1660511348184!5m2!1sen!2sid"
                style="border: 0"
                class="w-full aspect-video mt-6"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </article>
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
