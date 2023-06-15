<template>
  <div :class="$style.Main">
    <h1 :class="$style.Headline">Welcome to Musicmatch API!</h1>
    <div>
      <h3>
        Please select a country to check which artists are the most popular ones
        in that country!
      </h3>
      <div :class="$style.Countries">
        <div
          v-for="{ name, code } in countries"
          @click="goToCountry(name, code)"
          :class="$style.Country">
          {{ name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import countries from "@utils/countries.js";
import { useRouter } from "vue-router";

const router = useRouter();

const goToCountry = (countryName, code) => {
  router.push({ name: "artists", params: { countryName, code } });
};
</script>

<style module>
.Main {
  width: 50%;
  margin: auto;
}
.Headline {
  color: #1acb9d;
  font-weight: 600;
  font-size: 3rem;
}

.Countries {
  display: flex;
  justify-content: space-between;
}

.Country {
  border: solid 0.0625rem aquamarine;
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.75s;
  cursor: pointer;
}

.Country:hover {
  background-color: aquamarine;
  border-color: transparent;
  color: black;
}
</style>
