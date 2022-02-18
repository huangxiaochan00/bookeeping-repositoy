<template>
  <Layout>
    <router-link
      class="tag"
      v-for="tag in tags"
      :key="tag.id"
      :to="`/labels/edit/${tag.id}`"
    >
      <span>{{ tag.name }}</span>
      <Icon name="right" class="icon" />
    </router-link>

    <div class="createTag-wrapper">
      <button @click="createTag">新增标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
//import Nav from "@/components/Nav.vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel.ts";
tagListModel.fetch();
@Component
export default class Label extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("输出标签名");
    if (name === "") {
      window.alert("标签名不能为空");
      return;
    } else {
      tagListModel.create(name);
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  font-size: 16px;
  background: white;
  min-height: 44px;
  display: flex;
  padding-left: 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  > .icon {
    margin-right: 16px;
    color: #666;
  }
}
.createTag-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44px -16px;
}
</style>