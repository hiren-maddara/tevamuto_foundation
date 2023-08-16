import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/Projects.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/:sect?/article/:id",
      name: "article",
      component: () => import("../components/Article.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/Contacts.vue"),
    },
    {
      path: "/adminpublic",
      name: "adminpublic",
      component: () => import("../views/AdminPublic.vue"),
    },
  ],
});

export default router;
