import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app }) => {
  Vue.use(VueMatomo, {
    host: 'https://matomo.soji.dev',
    siteId: 2,
    router: app.router,
    disableCookies: true,
    enableHeartBeatTimer: true,
  })
}
