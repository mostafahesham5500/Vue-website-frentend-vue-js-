import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/swiper-bundle.css";
import "animate.css/animate.min.css";
import { WOW } from "wowjs";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueObserveVisibility from "vue-observe-visibility";

Vue.use(VueObserveVisibility);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  VueAwesomeSwiper,
  render: (h) => h(App),
}).$mount("#app");

var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true
})
wow.init();