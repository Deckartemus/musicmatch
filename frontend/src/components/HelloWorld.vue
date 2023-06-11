<script setup>
import { ref } from "vue";

const countries = [
  {
    name: "Germany",
    code: "de",
  },
  {
    name: "Italy",
    code: "it",
  },
  {
    name: "France",
    code: "fr",
  },
];
const list = ref([]);

const checkCountry = async countryCode => {
  console.log(countryCode);
};
const checkApi = async () => {
  list.value = await fetch("http://localhost:3000/api/artists")
    .then(response => response.json())
    .then(data => {
      return data.message;
    });
  console.log(list.value.body);
};
</script>

<template>
  <h1 :class="$style.Headline">Welcome to Musicmath API!</h1>
  <div>
    <h3>Please select the country from the list</h3>
    <div v-for="{ name, code } in countries" @click="checkCountry(code)">
      {{ name }}
    </div>
  </div>
  <button @click="checkApi">check api</button>
  <div v-if="list.length > 0">
    <div v-for="artist in list">
      {{ artist }}
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
