<script setup lang="ts">
const menuPromos = ref([
  {
    name: "Promo Es Kopi Susu Nakoa - buy 1 get 1 free",
    thumbnail:
      "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE2020051101104312451/detail/menueditor_item_d9d3c4a13f214454bb20e5c72a219fce_1591154088555781915.webp",
    description: "Yuk cobain menu terbaru dari Nakoa, Es Kopi Susu Nakoa",
    originalPrice: 36000,
    price: 18000,
  },
  {
    name: "Promo Chocolovers - Buy 2 Get 1 Free",
    thumbnail:
      "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE2020050601442884564/detail/menueditor_item_723186e793ec42619535beb9495d067c_1591154200415139621.webp",
    description:
      "Pilihan: Signature Dark Chocolate, Choco Banana, Choco Berry, Choco Tiramizu, Javachip",
    originalPrice: 78000,
    price: 54000,
  },
  {
    name: "Promo Bobalicious - Buy 2 Get 1 Free",
    thumbnail:
      "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/IDITE2020043001173472139/detail/menueditor_item_6d28e6850651409098cc50adfde21267_1591154354860239165.webp",
    description:
      "Pilihan: Bobba Brown Sugar (L), Bobba Brown Sugar Brulee (L), Klepon Brown Sugar (L), Coffee Bobba Brown Sugar (L)",
    originalPrice: 81000,
    price: 54000,
  },
]);

const coffeeMenus = ref([
  {
    name: "Es Kopi Susu Nakoa With Coffee Jelly",
    description: "Es Kopi Susu Dengan Jelly",
    price: 21000,
  },
  {
    name: "Caffé Americano",
    description: "Iced Black Coffee",
    price: 15000,
  },
  {
    name: "Ice Caramel Macchiato",
    description: "Es Kopi Susu Dengan Rasa Karamel Yang Kaya",
    price: 21000,
  },
  {
    name: "Ice Cappuccino",
    description: "Kombinasi Espresso Dan Susu Dengan Foam Tebal",
    price: 18000,
  },
  {
    name: "Ice Vanilla Latte",
    description: "Es Caffe Latte Dengan Tambahan Sirup Vanilla",
    price: 21000,
  },
  {
    name: "Ice Asian Dolce Latte",
    description: "Es Kopi Susu Dengan Condensed Milk Yang Creamy",
    price: 21000,
  },
  {
    name: "Ice Hazelnut Latte",
    description: "Es Caffe Latte Dengan Tambahan Sirup Hazelnut",
    price: 21000,
  },
]);

const instagramPictures = useInstagramPictures();
</script>

<template>
  <div>
    <div class="mt-20"></div>

    <!-- Menu Section -->
    <section id="menu-section" class="relative w-full bg-white text-slate-900">
      <div
        class="container mx-auto flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-8 lg:py-16"
      >
        <BaseHeader>
          <template #title> <BaseHeading text="Promo Hari Ini" /> </template>
          <template #action>
            <a href="#" class="text-brand">Lihat Menu</a>
          </template>
        </BaseHeader>

        <div class="grid md:grid-cols-3 gap-8 lg:gap-16">
          <PromoMenuCard
            v-for="menu in menuPromos"
            :key="menu.name"
            :menu="menu"
            :with-detail-hover="false"
          />
        </div>
      </div>
    </section>
    <!-- ./Menu Section -->

    <!-- Menu Coffee -->
    <section class="w-full h-auto flex flex-col lg:flex-row">
      <div class="order-1 lg:w-8/12 bg-[url(http://nunforest.com/restory-demo/upload/banners/background@2x.jpg)] bg-center bg-cover text-white">
        <div class="container mx-auto px-4 md:px-8 lg:px-12 py-6 lg:py-12">
          <div class="flex flex-col gap-4 md:gap-8 lg:gap-12">
            <h2 class="font-bold text-4xl md:text-6xl">Coffee</h2>
            <ul class="flex flex-col gap-8">
              <li
                v-for="menu in coffeeMenus"
                :key="menu.name"
                class="flex flex-col gap-2"
              >
                <header class="flex items-center justify-between gap-4">
                  <h3 class="w-3/5 font-medium text-lg text-brand uppercase">
                    {{ menu.name }}
                  </h3>
                  <p class="font-medium text-lg text-brand uppercase">
                    {{ useFormatRupiah(menu.price) }}
                  </p>
                </header>
                <p class="font-light text-sm">{{ menu.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <figure class="order-2 flex-1">
        <img
          class="w-full h-full object-cover"
          src="https://nakoa.id/themes/laratify-octobercms-octaskin/assets/img/pages/menu/header/menu.jpg"
          alt="Coffee Menu"
        />
      </figure>
    </section>
    <!-- ./Menu Coffee -->

    <!-- Menu Non Coffee -->
    <section class="w-full h-auto flex flex-col lg:flex-row">
      <div class="order-1 lg:order-2 lg:w-8/12 bg-white bg-center bg-cover text-slate-900">
        <div class="container mx-auto px-4 md:px-8 lg:px-12 py-6 lg:py-12">
          <div class="flex flex-col gap-4 md:gap-8 lg:gap-12">
            <h2 class="font-bold text-4xl md:text-6xl">Non Coffee</h2>
            <ul class="flex flex-col gap-8">
              <li
                v-for="menu in coffeeMenus"
                :key="menu.name"
                class="flex flex-col gap-2"
              >
                <header class="flex items-center justify-between gap-4">
                  <h3 class="w-3/5 font-medium text-lg text-brand uppercase">
                    {{ menu.name }}
                  </h3>
                  <p class="font-medium text-lg text-brand uppercase">
                    {{ useFormatRupiah(menu.price) }}
                  </p>
                </header>
                <p class="font-light text-sm">{{ menu.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <figure class="order-2 lg:order-1 flex-1">
        <img
          class="w-full h-full object-cover"
          src="https://nakoa.id/themes/laratify-octobercms-octaskin/assets/img/pages/menu/header/menu.jpg"
          alt="Non Coffee Menu"
        />
      </figure>
    </section>
    <!-- ./Menu Non Coffee -->

    <!-- Menu Snack -->
    <section class="w-full h-auto flex flex-col lg:flex-row">
      <div class="order-1 lg:w-8/12 bg-[url(http://nunforest.com/restory-demo/upload/banners/background@2x.jpg)] bg-center bg-cover text-white">
        <div class="container mx-auto px-4 md:px-8 lg:px-12 py-6 lg:py-12">
          <div class="flex flex-col gap-4 md:gap-8 lg:gap-12">
            <h2 class="font-bold text-4xl md:text-6xl">Snack</h2>
            <ul class="flex flex-col gap-8">
              <li
                v-for="menu in coffeeMenus"
                :key="menu.name"
                class="flex flex-col gap-2"
              >
                <header class="flex items-center justify-between gap-4">
                  <h3 class="w-3/5 font-medium text-lg text-brand uppercase">
                    {{ menu.name }}
                  </h3>
                  <p class="font-medium text-lg text-brand uppercase">
                    {{ useFormatRupiah(menu.price) }}
                  </p>
                </header>
                <p class="font-light text-sm">{{ menu.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <figure class="order-2 flex-1">
        <img
          class="w-full h-full object-cover"
          src="https://nakoa.id/themes/laratify-octobercms-octaskin/assets/img/pages/menu/header/menu.jpg"
          alt="Snack Menu"
        />
      </figure>
    </section>
    <!-- ./Menu Snack -->

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
  </div>

</template>
