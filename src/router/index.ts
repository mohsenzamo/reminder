import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    alias: ["/home", "/index", "/hom"],
    component: () => import("../views/home/Home.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/list/List.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
