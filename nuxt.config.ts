// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'kr',
        iso: 'kr-KO',
        name: 'Korean(KO)',
        file: 'kr-KO.json',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English(US)',
        file: 'en-US.json',
      },
    ],
    defaultLocale: 'kr',
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
          type: 'text/css',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    autoImports: ['defineStore', ['defineStor', 'definePiniaStore']],
  },
  imports: {
    dirs: ['./stores'],
  },
  runtimeConfig: {
    DB_NAME: 'saintis',
    DB_USER: 'root',
    DB_PASSWORD: '1234',
  },
});
