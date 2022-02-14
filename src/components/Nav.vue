<template>
  <div>
    <div>
      <router-link to="/money">
        <svg><use xlink:href="#money" /></svg>
        记账</router-link
      >
      |
      <router-link to="/labels">标签</router-link>
      |
      <router-link to="/statistics">具体</router-link>
    </div>
  </div>
</template>

<script lang="ts">
//import Vue from "vue";
import x from "@/assets/icons/money.svg";
console.log(x);
export default {
  name: "Nav",
};
</script>

<style scoped>
</style>