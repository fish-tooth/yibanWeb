<template>
  <div class="btn">
    <ElButton @click="hello">Hello</ElButton>
  </div>
</template>

<script setup>
import { ElButton, ElMessage } from "element-plus";
const hello = () => ElMessage.info("hello world");
</script>

<style lang="scss" scoped></style>
