<template>
  <Layout>
    <ol>
      <li class="tag">
        <span>衣</span>
        <Icon name="right" class="icon" />
      </li>
      <li class="tag">
        <span>食</span>
        <Icon name="right" class="icon" />
      </li>
      <li class="tag">
        <span>住</span>
        <Icon name="right" class="icon" />
      </li>
      <li class="tag">
        <span>行</span>
        <Icon name="right" class="icon" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button>新增标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
//import Nav from "@/components/Nav.vue";
export default {
  name: "Labels",
  //components: { Nav },
};
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