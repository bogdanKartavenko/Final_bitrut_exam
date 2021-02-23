import Vue from "vue";
import App from "./App.vue";
import AppButtonShop from './components/common/AppButtonShop.vue';

Vue.component('AppButtonShop', AppButtonShop);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
