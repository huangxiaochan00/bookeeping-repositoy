<template>
  <div class="tag">
    <ol>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>添加</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang="scss">
.tag {
  width: 100%;

  background: #ffffff;
  flex-grow: 1;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  overflow-y: auto;
  > ol {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    > li {
      border: 1px red solid;
      border-radius: 18px;
      display: flex;
      width: 70px;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      margin: 12px 10px;
      color: gray;
      fill: gray;
      &.selected {
        color: black;
        fill: rgb(1, 61, 34);
      }
      > a {
        text-align: center;
        fill: gray;
      }
    }
  }
}
.icon {
  font-size: 40px;
}
.tagname {
  max-width: 62px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tag::-webkit-scrollbar {
  display: none;
}
</style>