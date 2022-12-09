import { createWebHistory, createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/:catchAll(.*)",
    component: () => import("../components/notFound.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../components/home.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});

export default router;
