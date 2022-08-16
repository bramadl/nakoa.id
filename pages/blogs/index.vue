<script setup lang="ts">
const Blogs = ref([
  {
    title: "How To Make A V60? Step By Step Coffee Guide",
    thumbnail:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tag: "Journal",
      slug: "how-to-make-a-v60-step-by-step-coffee-guide"
  },
  {
    title: "An Easy Going Moka, For Grumpy Mornings",
    thumbnail:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
      tag: "Journal",
      slug: "an-easy-going-moka-for-grumpy-mornings"
  },
  {
    title: "Everything you need to know about roasting",
    thumbnail:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      tag: "Journal",
      slug: "everything-you-need-to-know-about-roasting"
  },
  {
    title: "How to preprae a chemex? Step by step coffee guide",
    thumbnail:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tag: "Journal",
      slug: "how-to-preprae-a-chemex?-step-by-step-coffee-guide"
  },
  {
    title: "An easy goign aeropress, enjoayble guide",
    thumbnail:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
      tag: "Journal",
      slug: "an-easy-going-aeropress,-enjoayble-guide"
  },
  {
    title: "Everything you need to know about roasting",
    thumbnail:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      tag: "Journal",
      slug: "everything-you-need-to-know-about-roasting"
  },
]);
</script>

<template>
  <div>
    <div class="mt-20"></div>
    <section class="relative w-full bg-white text-slate-900">
      <div
        class="container mx-auto flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-8 lg:py-16"
      >
        <BaseHeader>
          <template #title>
            <BaseHeading text="Artikel" class="font-bold text-3xl" />
          </template>
        </BaseHeader>
        <div class="grid md:grid-cols-3 gap-8 lg:gap-16">
          <BlogCard
            v-for="blog in Blogs"
            :key="blog.title"
            :blog="blog"
          />
        </div>
      </div>
    </section>
  </div>
</template>
