<script setup>
import { ref } from "vue";
import { anyPass, isEmpty, isNil } from "ramda";
import { stringify } from "qs";
import countries from "@utils/countries.js";
import API_URL_BACKEND from "@constants/env.js";

const isNilOrEmpty = anyPass([isNil, isEmpty]);

const list = ref();

const checkCountry = async countryCode => {
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
  <h1 :class="$style.Headline">Welcome to Musicmatch API!</h1>
  <div>
    <h3>
      Please select the country to check which artists are the most popular ones
      in that country!
    </h3>
    <div v-for="{ name, code } in countries" @click="checkCountry(code)">
      {{ name }}
    </div>
  </div>
  <div v-if="!isNilOrEmpty(list)">
    <div v-for="artist in list">
      <pre>
        {{ artist.artist.artist_name }}
      </pre>
    </div>
  </div>
</template>

<style module>
.Headline {
  color: #1acb9d;
  font-weight: 600;
  font-size: 3rem;
}
</style>
