<template>
  <div>Album list for {{ route.params.name }}</div>
  <div v-if="!isNilOrEmpty(albums)" v-for="{ name } in albums">
    {{ name }}
  </div>
  <div :class="$style.BackButton" @click="goBack">
    Check a different artist!
  </div>
</template>

<script setup>
import useAlbums from "@services/useAlbums.js";
import { useRoute, useRouter } from "vue-router";
import utils from "@utils";

const { isNilOrEmpty } = utils;

const route = useRoute();
const router = useRouter();
const { albums } = useAlbums(route.params.artistId);
const goBack = () => {
  router.go(-1);
};
</script>

<style module>
.BackButton {
  margin: 2rem auto 0 auto;
  border: 0.0625rem solid white;
  border-radius: 1rem;
  width: fit-content;
  padding: 2rem;
  transition: all 0.75s;
  cursor: pointer;
}

.BackButton:hover {
  color: aquamarine;
  background-color: rgba(139, 0, 139, 0.99);
}
</style>
