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
      name: "helloworld",
      component: () => import("../components/Helloworld.vue"),
      // chirlden:[]
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes,
  });
  
  export default router;