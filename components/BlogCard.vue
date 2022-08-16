<script setup lang="ts">
type BlogCardProps = {
  blog: {
    thumbnail: string,
    tag: string,
    title: string,
    slug: string,
  };
};
defineProps<BlogCardProps>();
</script>

<template>
  <section class="flex items-start flex-col gap-4">
    <img
      :src="blog.thumbnail"
      class="hover:opacity-50 transition ease-in duration-200 h-52 w-full object-cover"
    />
    <div>
      <p>{{ blog.tag }}</p>
      <p class="font-bold text-xl">{{ blog.title }}</p>
    </div>
    <NuxtLink :to="`/blogs/${blog.slug}`" class="border-b border-brand text-brand cursor-pointer">Baca lebih lanjut</NuxtLink>
  </section>
</template>
