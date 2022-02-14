<template>
  <div class="nav-wrapper">
    <div class="nav-content">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "@/components/Nav.vue";
export default {
  components: { Nav },
};
</script>

<style scoped>
.nav-wrapper {
  border: 1px red solid;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.nav-content {
  border: 1px green solid;
  flex-grow: 1;
  overflow: auto;
}
</style>