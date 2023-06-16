<template>
  <div :class="$style.AlbumsListHeadline">
    Album list for
    <span :class="$style.ArtistName">{{ route.params.name }}</span>
  </div>
  <div
    v-if="!isNilOrEmpty(albums)"
    v-for="{ name } in albums"
    :class="$style.Album">
    {{ name }}
  </div>
  <Button @onClick="goBack"></Button>
</template>

<script setup>
import useAlbums from "@services/useAlbums.js";
import { useRoute, useRouter } from "vue-router";
import utils from "@utils";
import Button from "@Components/Button.vue";

const { isNilOrEmpty } = utils;

const route = useRoute();
const router = useRouter();
const { albums } = useAlbums(route.params.artistId);
const goBack = () => {
  router.go(-1);
};
</script>

<style module>
.AlbumsListHeadline {
  margin-bottom: 3rem;
  font-size: 4rem;
  color: aquamarine;
}

.ArtistName {
  color: rgba(139, 0, 139, 0.99);
}

.Album {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 0.0625rem white;
  padding: 1rem;
}
</style>
