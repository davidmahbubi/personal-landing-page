import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/projects",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "projects" */ "./../views/Projects.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "./../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
