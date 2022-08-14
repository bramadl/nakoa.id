import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
        },
      ],
    },
  },
  modules: [
    ["@nuxtjs/tailwindcss", { cssPath: "~/assets/css/tailwind.css" }],
    ["@pinia/nuxt"],
    ["@vueuse/nuxt"],
  ],
  typescript: {
    shim: false,
  },
});
