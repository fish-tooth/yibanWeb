<script setup lang="ts">
import Header from "./common/Header.vue";
import { ref } from "vue";
import API from "../axios/index";
const msg = ref("你好");

(async () => {
  const res = await API.get("/api/getData");
  console.log(res);
})();
</script>

<template>
  <Header></Header>
  <h1>{{ msg }}</h1>
</template>

<style scoped></style>
