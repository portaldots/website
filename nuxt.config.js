export default {
  target: 'static',
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: '',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    './assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-matomo.js', ssr: false },
    '~/plugins/vue-scrollactive.js',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],
  eslint: {
    fix: true,
  },
  stylelint: {
    fix: true,
  },
  styleResources: {
    scss: ['./assets/scss/_variables.scss'],
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxtjs/axios', '@nuxtjs/tailwindcss'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
