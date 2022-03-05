<template>
  <div>
    <ul class="types">
      <li
        :class="{
          selected: type === '-',
          [classPrefix + '-item']: classPrefix,
        }"
        @click="selectedType('-')"
      >
        支出
      </li>
      <li
        :class="{
          selected: type === '+',
          [classPrefix + '-item']: classPrefix,
        }"
        @click="selectedType('+')"
      >
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Type extends Vue {
  @Prop(String) readonly type!: string;
  @Prop(String) classPrefix?: string;
  selectedType(type: string) {
    this.$emit("update:type", type);
  }
}
</script>

<style scoped lang="scss">
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
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
    }
  }
}
</style>