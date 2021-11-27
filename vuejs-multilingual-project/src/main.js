import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import i18n from '@/plugins/i18n'
import { store } from '@/store'
import '@/plugins/common'
import '@/plugins/veevalidate'

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
