import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'dama-sd',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DAMA South Dakota is a chapter of DAMA International, a leading global data management association. The organization provides a forum for data professionals to network, learn, and grow.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'South Dakota,South Dakota DAMA,DAMA,DAMA SD, DAMA-SD, South Dakota data management,data management, data governance, data quality, data architecture, data modeling, master data management, data warehousing, business intelligence, data analytics, data stewardship, data privacy, data security, metadata management, data integration, data-driven decision making, data-driven culture, data-driven business, data literacy, data competency, data maturity, information management, knowledge management, enterprise data management, big data, cloud computing, artificial intelligence (AI), machine learning (ML), natural language processing (NLP), data visualization, data storytelling, data ethics, data responsibility, data lake, data mesh, data fabric, data virtualization, data catalog, data dictionary, data glossary, data lineage, data profiling, data cleansing, data enrichment, data harmonization, data migration, data transformation, data loading, data extraction, data warehousing, data mining, data analysis, data reporting, data dashboard, data visualization, data science, data scientist, data analyst, data engineer, data architect, data governance professional, data privacy officer, data security officer, chief data officer (CDO), data-driven organization, data-driven culture, data-driven decision making, data-driven insights, data-driven innovation, data-driven transformation,Data analysis South Dakota' }
    ],
    link: [
      { rel: 'icon', href: '/assets/images/sd.png'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
