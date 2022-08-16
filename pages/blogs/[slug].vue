<script setup>
const articles = useArticles();
const route = useRoute();

const slug = route.params.slug;
const article = reactive(
  articles.value.find((article) => article.slug === slug)
);

console.log(article);
</script>

<template>
  <div class="mt-20"></div>
  <section class="flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-8 lg:py-16">
    <section class="container flex flex-col gap-8 md:w-[60%] mx-auto">
      <header>
        <h1 class="text-3xl md:text-5xl font-semibold md:leading-snug">{{ article.title }}</h1>
        <span>{{ article.tag }} - Jun 28</span>
      </header>
      <figure>
        <img class="w-full object-cover" :src="article.thumbnail" alt="" />
      </figure>
      <div class="flex flex-col gap-4">
        <p>
          Magna scelerisque non fringilla enim adipiscing porttitor. Lectus
          lacinia vel aliquet enim fusce. Consequat a vitae sed neque
          suspendisse habitant morbi. Imperdiet lectus placerat sagittis in
          euismod. Viverra neque cras senectus malesuada non ornare sodales est.
        </p>
        <p>
          Duis vivamus et posuere eu. Nulla nam turpis amet odio. Velit, in
          dolor tincidunt quis vestibulum. Semper nisl mattis adipiscing justo
          aliquet rutrum pellentesque sed. Aliquam egestas id nec et dictumst
          pulvinar in. Venenatis lacus dolor non ut eu ut. Nam amet, commodo
          aliquet non. Sapien odio faucibus vulputate lorem scelerisque felis,
          posuere quis at.
        </p>
        <p>
          Duis vivamus et posuere eu. Nulla nam turpis amet odio. Velit, in
          dolor tincidunt quis vestibulum. Semper nisl mattis adipiscing justo
          aliquet rutrum pellentesque sed. Aliquam egestas id nec et dictumst
          pulvinar in. Venenatis lacus dolor non ut eu ut. Nam amet, commodo
          aliquet non. Sapien odio faucibus vulputate lorem scelerisque felis,
          posuere quis at.
        </p>
      </div>
    <div class="flex items-center justify-start">
      <NuxtLink to="/blogs" class="flex items-center gap-2 text-xl"> <i class='bx bx-left-arrow-alt' /> Back</NuxtLink>
    </div>
    </section>
  </section>
</template>

<style scoped></style>
