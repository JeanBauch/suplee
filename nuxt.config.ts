import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://awesome-lib.css" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" }
    ]
  },
  runtimeConfig: {
    public: {
      apiBase: ""
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "tailwindcss/nesting": { },
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    },
    transpile: ["@heroicons/vue"]
  },
  buildModules: ["@pinia/nuxt"],
  css: [
    "@/assets/css/main.css",
    "@/assets/css/tailwind.css"
  ],
  typescript: {
    strict: true
  }
});
