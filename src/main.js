import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// console.log(import.meta.env.VITE_SUPABASE_URL);

document.addEventListener("DOMContentLoaded", (e) => {
  const header = document.querySelector(".navbar");
  const headerHeight = header.getBoundingClientRect().height;

  window.addEventListener("scroll", (e) => {
    if (
      +window.scrollY < headerHeight + 200 &&
      header.classList.contains("sticky_nav")
    ) {
      header.classList.remove("sticky_nav");
      return;
    }

    if (
      +window.scrollY > +headerHeight + 200 &&
      !header.classList.contains("sticky_nav")
    ) {
      header.classList.add("sticky_nav");
    }
  });
});
