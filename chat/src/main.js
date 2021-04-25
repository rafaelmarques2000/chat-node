import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/assets/app.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSocketIO from "vue-socket.io";
import SocketIo from 'socket.io-client';

const options = {
  transports: ['websocket'],
}
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIo('http://localhost:3000', options),
}))


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
