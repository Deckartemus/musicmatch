<script setup>
import { ref } from "vue";
import { stringify } from "qs";
import utils from "@utils/index";

import API_URL_BACKEND from "@constants/env.js";

defineProps({
  countryName: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
  },
});

const list = ref();
const { isNilOrEmpty } = utils;

const fetchArtists = async countryCode => {
  const url = `${API_URL_BACKEND}/api/artists`;
  const params = stringify({
    countryCode,
  });
  list.value = await fetch(`${url}/${params}`)
    .then(response => response.json())
    .then(data => {
      return data.message.body.artist_list;
    });
};
</script>

<template>
  <div @click="fetchArtists(countryCode)">
    {{ countryName }}
  </div>
  <div v-if="!isNilOrEmpty(list)">
    <div v-for="artist in list">
      <pre>
        {{ artist.artist.artist_name }}
      </pre>
    </div>
  </div>
</template>

<style scoped></style>
