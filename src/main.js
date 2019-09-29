import Vue from 'vue'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import App from './App'
import router from './router'
import store from './store'
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
  store,
  vuetify: new Vuetify(options),
  components: { App },
  template: '<App/>',
  created() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAQO3f6TRGc9-DmT7sXLdXLmDds_b4ivkE',
      authDomain: 'english-learn-46e5f.firebaseapp.com',
      databaseURL: 'https://english-learn-46e5f.firebaseio.com',
      projectId: 'english-learn-46e5f',
      storageBucket: '',
      messagingSenderId: '784507449657',
      appId: '1:784507449657:web:cd59ae5d928d15e58138e8'
    }
    fb.initializeApp(firebaseConfig)
  }
})
