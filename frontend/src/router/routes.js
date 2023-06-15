import Home from "@views/Home.vue";
import Artists from "@Components/Artists.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/artists/:countryName/:code", name: "artists", component: Artists },
];

export default routes;
