<template>
  <div>
    <ul class="types">
      <li
        v-for="item in dataSource"
        :key="item.value"
        :class="{
          selected: value === item.value,
          [classPrefix + 'tabs-item']: classPrefix,
        }"
        @click="select(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
type dataSourceItem = { text: string; value: string };
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Type extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  @Prop({ required: true, type: Array }) dataSource!: dataSourceItem[];

  select(item: dataSourceItem) {
    this.$emit("update:value", item.value);
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
      // background: #333;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
    }
  }
}
</style>