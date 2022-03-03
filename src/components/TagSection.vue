<template>
  <div class="tag">
    <ol>
      <li
        :class="{ selected: currentTag === tag }"
        v-for="tag in tagList"
        :key="tag.id"
        @click="selected(tag)"
      >
        <Icon :name="`${tag.icon}`" />
        {{ tag.name }}
      </li>
      <li>
        <router-link to="/addLabel">
          <Icon name="add" />
        </router-link>
        添加
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import clone from "@/lib/clone";
@Component
export default class TagSection extends Vue {
  @Prop(String) readonly type!: string;
  // selectedTag = "1";
  // currentTag?: Tag | undefined;
  get currentTag() {
    return this.$store.state.currentTag;
  }
  get tagList() {
    const tagList: Tag[] = clone(this.$store.state.tagList).filter(
      (r: Tag) => r.type === this.type || r.type === "all"
    );
    return tagList;
  }
  selected(tag: Tag) {
    // this.currentTag = tag;
    this.$emit("update:selected", tag.name);
    this.$store.commit("setCurrentTag", tag);
  }
  created() {
    this.$store.commit("fetchTag");
  }
  createTag() {
    this.$store.commit("createTag");
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
      // border: 1px red solid;
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