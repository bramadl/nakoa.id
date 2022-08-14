<script setup lang="ts"></script>

<template>
  <div class="w-8/12 h-full flex flex-col gap-16">
    <div class="flex flex-col gap-6">
      <BaseHeading text="What's Nakoa?" />
      <h2 class="font-bold text-6xl">About, Vision and Nakoa Culture</h2>
    </div>
    <div class="flex-1 flex items-start justify-between gap-8 overflow-hidden">
      <article class="h-full flex-1 flex flex-col items-start justify-between">
        <BaseParagraph>
          Tempor, tellus ac, imperdiet nec pulvinar faucibus sagittis orci. Cras
          vitae, quam arcu ullamcorper. Enim, cum blandit facilisi in. Cras sem
          nulla sit tortor nec. Mattis quis purus dolor ante rhoncus commodo
          consectetur sollicitudin.
        </BaseParagraph>
        <BaseActionButton to="/about" text="Baca lebih lanjut" />
      </article>
      <figure class="flex-1 h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80"
          alt="TITIT BESAR ALASKAAAA"
          class="w-full h-full object-cover"
        />
      </figure>
    </div>
  </div>
</template>
