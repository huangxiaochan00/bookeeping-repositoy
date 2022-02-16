<template>
  <div class="numpad">
    <div class="output">100</div>
    <div class="buttonpad">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button class="dot">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.numpad {
  display: flex;
  flex-direction: column;
  > .output {
    background: white;
    font-size: 36px;
    line-height: 64px;
    text-align: right;
    padding: 0 16px;
  }
  > .buttonpad {
    @extend %clearFix;
    > button {
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &.dot {
        width: 25%;
      }
      &:nth-child(1) {
        background: rgb(92, 180, 141, 0.4);
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: rgb(92, 180, 141, 0.5);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: rgb(92, 180, 141, 0.6);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(13) {
        background: rgb(92, 180, 141, 0.7);
      }
      &:nth-child(8),
      &:nth-child(11) {
        background: rgb(92, 180, 141, 0.8);
      }
      &:nth-child(12) {
        background: rgb(92, 180, 141);
      }
      &:nth-child(14) {
        background: rgb(92, 180, 141, 0.9);
      }
    }
  }
}
</style>