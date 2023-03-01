<template>
  <div>
    <h1>关于我们</h1>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "关于我们",
  titleTemplate(title) {
    return title ? `以伴-${title}` : "";
  },
  meta: [
    { name: "description", content: "网页的描述" },
    { name: "keywords", content: "关键字1" },
  ],
  bodyAttrs: {
    class: "red",
  },
  script: [
    {
      src: "assets/a.js",
      body: true,
    },
  ],
});
</script>

<style>
.red {
  color: red;
}
</style>
