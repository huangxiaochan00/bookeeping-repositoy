<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账</router-link
    >

    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="tag" />
      标签</router-link
    >

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="detail" />
      具体</router-link
    >
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style scoped lang='scss'>
nav {
  display: flex;
  background: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 3px 0;
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
      fill: gray;
    }
    &.selected {
      color: black;
      .icon {
        fill: rgb(1, 61, 34);
      }
    }
  }
}
</style>