import Home from "@views/Home.vue";
import Artists from "@Components/Artists.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/artists/:countryName", name: "artists", component: Artists },
];

export default routes;
