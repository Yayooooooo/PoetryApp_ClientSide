// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import GSignInButton from 'vue-google-signin-button'
import VideoBg from 'vue-videobg'
import VueVideoBackground from 'vue-video-background'

Vue.component('video-bg', VideoBg)
Vue.component('videoBackground',VueVideoBackground)
Vue.use(GSignInButton)
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, VideoBg },
  template: '<App/>'
})
