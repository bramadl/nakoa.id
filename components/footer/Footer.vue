<script setup lang="ts"></script>

<template>
  <footer class="w-full h-auto bg-neutral-900 text-white">
    <div class="container mx-auto">
      <div class="flex items-start justify-between gap-8 py-16">
        <NuxtLink to="/">
          <NakoaBrandLogogram />
        </NuxtLink>
        <FooterMenuPart>
          <FooterMenuPartLabel text="Informasi Umum" />
          <NakoaGeneralInformation />
        </FooterMenuPart>
        <FooterMenuPart>
          <FooterMenuPartLabel text="Menu Utama" />
          <NakoaMainMenu />
        </FooterMenuPart>
        <FooterMenuPart>
          <FooterMenuPartLabel text="Pesan Menu" />
          <NakoaPurchaseChannel />
        </FooterMenuPart>
        <FooterMenuPart>
          <FooterMenuPartLabel text="Follow Us" />
          <NakoaSocialMedias />
        </FooterMenuPart>
        <FooterMenuPart>
          <FooterMenuPartLabel text="Scan menu kami" />
          <NakoaMenuBarcode />
        </FooterMenuPart>
      </div>
      <FooterAttribution />
    </div>
  </footer>
</template>
