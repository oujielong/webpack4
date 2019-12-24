import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import router from "./router/router";
new Vue({
  router,
  template: "<router-view></router-view>"
}).$mount("#app");
