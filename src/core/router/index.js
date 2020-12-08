import Vue from "vue";
import Router from "vue-router";
import News from "@/screens/content/news/News.vue";
import Classes from "@/screens/content/classes/Classes.vue";
import AboutUs from "@/screens/content/about-us/AboutUs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/classes",
      name: "classes",
      component: Classes
    },
    {
      path: "/about-us",
      name: "AboutUs",
      component: AboutUs
    }
  ]
});
