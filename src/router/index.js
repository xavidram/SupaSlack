import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import userStore from "@/stores/user";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter(to, from, next) {
      if (userStore.getters.isLoggedIn) next("/app");
      else next();
    }
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }, {
    path: "/app",
    name: "AppLayout",
    component: () => import("../views/AppLayout.vue"),
    children: [
      {
        path: "/",
        name: "ContentView",
        component: () => import("../views/ContentView.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (!userStore.getters.isLoggedIn && requiresAuth) {
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
