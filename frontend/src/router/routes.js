import Home from "@views/Home.vue";
import Artists from "@Components/Artists.vue";
import Albums from "@Components/Albums.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/artists/:countryName/:code", name: "artists", component: Artists },
  { path: "/albums/:artistId/:name", name: "albums", component: Albums },
];

export default routes;
