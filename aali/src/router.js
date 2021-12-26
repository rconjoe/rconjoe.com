import Vue from "vue";
import VueRouter from "vue-router";
import Dark from "./views/Index-dark.vue";
import Index from "./views/Index.vue";
import Intro from "./views/Intro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/index-dark",
    name: "Dark",
    component: Dark,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
