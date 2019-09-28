import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

const options = {
  icons: {
    iconfont: 'md'
  }
}

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(options),
  components: { App },
  template: '<App/>'
})
