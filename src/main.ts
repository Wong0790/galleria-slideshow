import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import Home from "@components/Home.vue";
import Painting from "@components/Painting.vue";
import LogoIcon from "@icons/LogoIcon.vue";
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/700.css";
import { createRouter, createWebHistory } from "vue-router";
import LinkedInIcon from "@icons/LinkedInIcon.vue";
import GithubIcon from "@icons/GithubIcon.vue";
import FrontendMentorIcon from "@icons/FrontendMentorIcon.vue";

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
  scrollBehavior() {
    return { top: 0 };
  },
});

const app = createApp(App);

app
  .component("LogoIcon", LogoIcon)
  .component("LinkedInIcon", LinkedInIcon)
  .component("GithubIcon", GithubIcon)
  .component("FrontendMentorIcon", FrontendMentorIcon)
  .component(Skeletor.name, Skeletor);

app.use(router).mount("#app");
