<template>
  <div class="tag">
    <ol>
      <li
        :class="selectedTag == tag.id ? 'selected' : ''"
        v-for="tag in dataSource"
        :key="tag.id"
        @click="selected(tag)"
      >
        {{ tag.name }}
      </li>

      <li @click="create">添加</li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
// import tagListModel from "@/models/tagListModel.ts";
import store from "@/store/index2";
import Vue from "vue";
@Component
export default class Tag extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedTag = "1";
  selected(tag: string) {
    this.selectedTag = tag.id;
    // console.log(this.selectedTag);
    this.$emit("update:selected", this.selectedTag);
  }
  create() {
    store.createTag();
  }
}
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