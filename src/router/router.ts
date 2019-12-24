import VueRouter, { RouteConfig } from "vue-router";
import hello from "../views/hello.vue";

const viewNames = ["hell"];
const routes = viewNames.map(
  (view): RouteConfig => ({
    path: "/" + view,
    component: hello
  })
);
export default new VueRouter({
  routes
});
