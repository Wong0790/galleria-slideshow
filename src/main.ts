import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import Home from "@components/Home.vue";
import Painting from "@components/Painting.vue";
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/700.css";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/:name",
      component: Painting,
      name: "Painting",
    },
  ],
});

createApp(App).use(router).mount("#app");
