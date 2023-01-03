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
  {
    path: "/activityCase",
    // path: "/",
    name: "activityCase",
    component: () => import("../components/activityCase.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});

export default router;
