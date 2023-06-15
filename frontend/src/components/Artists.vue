<script setup>
import utils from "@utils/index";
import useArtists from "../services/useArtists.js";
import { useRoute, useRouter } from "vue-router";

const { isNilOrEmpty } = utils;
const route = useRoute();
const router = useRouter();
const { artists } = useArtists(route.params.code);
const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div :class="$style.ArtistsListHeadline">
    Here is the list of TOP10 artists in
    <span :class="$style.CountryName">{{ route.params.countryName }}</span>
  </div>
  <div v-if="!isNilOrEmpty(artists)" :class="$style.ArtistList">
    <div v-for="{ name } in artists" :class="$style.Artist">
      {{ name }}
    </div>
  </div>
  <div :class="$style.BackButton" @click="goBack">
    Check a different country!
  </div>
</template>

<style module>
.CountryName {
  color: rgba(139, 0, 139, 0.99);
}

.ArtistsListHeadline {
  margin-bottom: 3rem;
  font-size: 4rem;
  color: aquamarine;
}

.ArtistList {
  display: flex;
  gap: 1rem;
  width: min-content;
  align-items: center;
  margin: auto;
}

.Artist {
  display: inline-flex;
  height: fit-content;
  justify-content: center;
  border: solid 0.0625rem aquamarine;
  border-radius: 1rem;
  padding: 2rem;
  background-color: aquamarine;
  transition: all 0.75s;
  color: aquamarine;
  cursor: pointer;
}

.ArtistList {
  animation-name: motion;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

.ArtistList:hover {
  animation-play-state: paused;
}

@keyframes motion {
  0% {
    align-items: center;
  }

  25% {
    align-items: flex-end;
  }

  50% {
    align-items: center;
  }

  75% {
    align-items: flex-start;
  }

  100% {
    align-items: center;
  }
}

.Artist:hover {
  background-color: transparent;
  border-color: aquamarine;
  color: white;
}

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
