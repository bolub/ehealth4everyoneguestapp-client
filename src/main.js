import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
