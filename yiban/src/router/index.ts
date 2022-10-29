import {
  createWebHistory,
  createWebHashHistory,
  createRouter,
} from "vue-router";

const routes = [
  {
    path: "/:catchAll(.*)",
    component: () => import("../components/notFound.vue"),
  },
  {
    path: "/",
    name: "HelloWorld",
    component: () => import("../components/HelloWorld.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});

export default router;
