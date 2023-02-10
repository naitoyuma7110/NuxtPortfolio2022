import colors from 'vuetify/es5/util/colors'

export default {
  ssr: true,
  target: 'static',
  head: {
    titleTemplate: "内藤祐馬's Portfolio",
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'google-site-verification',
        content: 'pKDA1XZgQXJWQkOPHYhNs7iD8zZUCGlhDPkduawc4Q4',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '理学療法士/プログラマー 医療業界が抱える問題を解決する手段としてIT技術に興味を持ち転職しました。 前職の経験とプログラムの技術を利用して医療現場の専門家に貢献する仕事がしたいと思っています。',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '内藤祐馬,理学療法士,プログラマー',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "内藤祐馬's Portfolio",
      },
      { hid: 'og:type', property: 'og:type', content: 'profile' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://naito-portfolio.netlify.app',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "内藤祐馬's Portfolio",
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '理学療法士/プログラマー 医療業界が抱える問題を解決する手段としてIT技術に興味を持ち転職しました。 前職の経験とプログラムの技術を利用して医療現場の専門家に貢献する仕事がしたいと思っています。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://naito-portfolio.netlify.app/img/myimg.JPG',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap',
        rel: 'stylesheet',
      },

      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
    // MathJaxのライブラリをCDN経由で読み込み
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/prism'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // フォント
    '@nuxtjs/google-fonts',
    // microcms
    'nuxt-microcms-module',
  ],
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/date-fns',
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // router: {
  //   base: '/NuxtPortfolio/',
  // },

  generate: {
    dir: 'docs',
  },
}
