<script setup lang="ts">
const menuIsOpened = ref<boolean>(false);

const router = useRouter();

const navigateTo = (path: string) => {
  menuIsOpened.value = false;
  router.push(path);
};

const openMenu = () => {
  menuIsOpened.value = true;
  document.body.classList.add("overflow-hidden");
};

const closeMenu = () => {
  menuIsOpened.value = false;
  document.body.classList.remove("overflow-hidden");
};
</script>

<template>
  <button class="md:hidden text-2xl" @click="openMenu">
    <i class="bx bx-menu" />
  </button>

  <Transition :duration="600 + 75 + 100 + 150 + 200 + 300" name="menu">
    <div v-if="menuIsOpened" class="fixed z-20 left-0 top-0 w-full h-full">
      <div class="w-full h-full flex flex-col justify-between bg-neutral-900 text-white p-4">
        <div class="flex-1 flex items-start">
          <!-- Menu Item -->
          <div class="flex-1 h-full">
            <h2 class="font-bold text-lg">Nakoa Cafe</h2>
            <ul class="flex flex-col gap-4 mt-8">
              <li class="overflow-hidden">
                <NuxtLink class="inline-block uppercase font-light delay-75" to="/">
                  <span @click="navigateTo('/')">Beranda</span>
                </NuxtLink>
              </li>
              <li class="overflow-hidden">
                <NuxtLink class="inline-block uppercase font-light delay-100" to="/tentang">
                  <span @click="navigateTo('/tentang')">Tentang</span>
                </NuxtLink>
              </li>
              <li class="overflow-hidden">
                <NuxtLink class="inline-block uppercase font-light delay-150" to="/menus">
                  <span @click="navigateTo('/menus')">Menus</span>
                </NuxtLink>
              </li>
              <li class="overflow-hidden">
                <NuxtLink class="inline-block uppercase font-light delay-200" to="/blogs">
                  <span @click="navigateTo('/blogs')">Blogs</span>
                </NuxtLink>
              </li>
              <li class="overflow-hidden">
                <NuxtLink class="inline-block uppercase font-light delay-300" to="/Lokasi">
                  <span @click="navigateTo('/Lokasi')">Lokasi</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- ./Menu Item -->
  
          <button class="md:hidden text-2xl" @click="closeMenu">
            <i class="bx bx-x" />
          </button>
        </div>
  
        <a
          href="#"
          class="flex items-center justify-center border border-white text-white hover:bg-white hover:text-slate-900 py-3 px-4 transition ease-out duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  </Transition>
</template>

<style>
.menu-enter-to,
.menu-leave-from {
  opacity: 1;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.4s ease-out, background 0.4s ease-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-to li a,
.menu-leave-from li a {
  transform: translateY(0);
  opacity: 1;
}

.menu-enter-active li a,
.menu-leave-active li a {
  transition-property: opacity, transform;
  transition-duration: 0.6s;
}

.menu-enter-from li a,
.menu-leave-to li a {
  transform: translateY(16px);
  opacity: 0;
}
</style>
