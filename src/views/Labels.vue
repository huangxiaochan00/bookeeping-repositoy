<template>
  <Layout>
    <router-link
      class="tag"
      v-for="tag in tagList"
      :key="tag.id"
      :to="`/labels/edit/${tag.id}`"
    >
      <span>{{ tag.name }}</span>
      <Icon name="right" class="icon" />
    </router-link>

    <div class="createTag-wrapper">
      <router-link to="/addLabel">
        <Button>新增标签</Button>
      </router-link>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import Button from "@/components/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Label extends Vue {
  get tagList() {
    this.$store.commit("fetchTag");
    return this.$store.state.tagList;
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