import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddBookView from "@/views/AddBookView.vue";
import DetailView from "@/views/DetailView.vue";
import EditView from "@/views/EditView.vue";

const routes = [
  {
    path: "/add",
    name: "AddBookView",
    component: AddBookView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/books/:isbn",
    name: "DetailView",
    component: DetailView,
  },
  {
    path: "/books/edit/:isbn",
    name: "EditView",
    component: EditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
