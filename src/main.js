import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import P from './components/index';
import "./assets/fontFace/style.css"

Vue.use(P);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
