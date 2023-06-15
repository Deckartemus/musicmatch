<script setup>
import Layout from "@views/Layout.vue";
</script>

<template>
  <Layout>
    <router-view :key="$route.fullPath"></router-view>
  </Layout>
</template>

<style scoped></style>
