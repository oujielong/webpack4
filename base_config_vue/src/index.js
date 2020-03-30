import "./style/a.scss";
import "./style/b.less";
import "./style/index.css";
import _ from "lodash";

// 新版vue ，不能导入vue， 因为可运行的环境换了
import Vue from "vue/dist/vue.esm.js";

import axios from "axios";
import "../mock/mock.js";
import "../api_config/axios.js";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

import App from "./App.vue";
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
