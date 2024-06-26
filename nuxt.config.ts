// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://recruitmateai.com",
    name: "RecruitMate",
    description: "Email Campaigns Made Easy.",
    defaultLocale: "en",
  },
  devtools: { enabled: false },
  modules: [
    "nuxt-svgo",
    "@nuxtjs/seo",
    "nuxt-security",
    "@nuxt/image",
    "@nuxtjs/fontaine",
    "@nuxtjs/tailwindcss",
    "@nuxt/content"
  ],
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
});