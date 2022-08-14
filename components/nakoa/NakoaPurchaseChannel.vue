<script setup lang="ts">
type PurchaseChannelType = {
  to: string;
  text: string;
}[];

const purchaseChannels = ref<PurchaseChannelType>([
  { to: "#", text: "Shoppe" },
  { to: "#", text: "Grab" },
  { to: "#", text: "Gojek" },
]);
</script>

<template>
  <div class="flex flex-col gap-1">
    <a
      v-for="(channel, index) in purchaseChannels"
      :key="index"
      href="#"
      class="font-light text-sm hover:text-brand transition ease-out duration-300"
    >
      {{ channel.text }}
    </a>
  </div>
</template>
