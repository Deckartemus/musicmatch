<template>
  <h1 :class="$style.Headline">Welcome to Musicmatch API!</h1>
  <div>
    <h3>
      Please select the country to check which artists are the most popular ones
      in that country!
    </h3>
    <div v-for="{ name, code } in countries" @click="goToCountry(code)">
      {{ name }}
    </div>
  </div>
</template>

<script setup>
import countries from "@utils/countries.js";
import { useRouter } from "vue-router";

const router = useRouter();

const goToCountry = code => {
  router.push({ name: "artists", params: { code } });
};
</script>

<style module>
.Headline {
  color: #1acb9d;
  font-weight: 600;
  font-size: 3rem;
}
</style>
