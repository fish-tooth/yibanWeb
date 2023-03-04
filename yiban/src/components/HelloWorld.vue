<script setup lang="ts">
import { ref } from "vue";
import API from "../axios/index";
const msg = ref("你好");

(async () => {
  const res = await API.get("/api/getData");
  console.log(res);
})();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>

</style>
