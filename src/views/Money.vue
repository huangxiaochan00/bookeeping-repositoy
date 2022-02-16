<template>
  <div>
    <Layout class-prefix="money">
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
      <ul class="types">
        <li>支出</li>
        <li>收入</li>
      </ul>
      <div class="note">
        <label>
          <span>备注</span>
          <input />
        </label>
      </div>
      <div class="tag">
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>添加</li>
        </ol>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  name: "Money",
};
</script>

<style lang='scss'>
@import "~@/assets/style/helper.scss";
// import content from '../shims-vue';
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
.note {
  background: rgb(244, 246, 245);
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    padding: 0 16px;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 32px;
      background: none;
      border: none;
    }
  }
}

.types {
  font-size: 24px;
  background: rgb(92, 180, 141, 0.4);
  display: flex;
  > li {
    width: 50%;
    text-align: center;
    padding: 14px 0;
    position: relative;
    color: gray;
    &.selected {
      color: black;
      background: rgb(92, 180, 141);
    }
    &.selected::after {
      content: "";
      display: block;
      height: 3px;
      background: #333;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
    }
  }
}
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
.money-content {
  border: 1px green solid;
  display: flex;
  flex-direction: column-reverse;
}
.wrapper {
  // display: flex;
  padding: 4px;
  align-items: center;
}
</style>
