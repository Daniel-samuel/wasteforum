import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import FindRole from "../views/FindRole.vue";
import FindAll from "../views/FindAll.vue";
import Commit from "../views/Commit.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },

  {
    path: "/find",
    name: "FindRole",
    component: FindRole,
  },

  {
    path: "/all",
    name: "FindAll",
    component: FindAll,
  },
  {
    path: "/commit",
    name: "Commit",
    component: Commit,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
