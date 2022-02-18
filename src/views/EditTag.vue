<template>
  <div>
    <Layout>EditTag.vue</Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//import Nav from "@/components/Nav.vue";
// import EditTag from '@/views/EditTag.vue';
import { Component, Prop, Watch } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel.ts";

@Component
export default class EditTag extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    console.log(tag);

    if (!tag) {
      this.$router.replace("/404");
    }
  }
  // components: { Nav },
  //   name: "Statistics",
}
</script>
<style scoped lang="scss">
.navBar {
  display: flex;
  justify-content: space-between;
  height: 44px;
  align-items: center;
  font-size: 16px;
  background: white;
}
.form {
  margin-top: 12px;
  background: white;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44px -16px;
}
::v-deep .labelform {
  background: white;
  margin: 28px 0;
  > span {
    margin: 0 16px;
    white-space: nowrap;
    padding: 12px 0px;
  }
  > input {
    padding: 2px 2px;
    margin-bottom: 2px;
    font-size: 16px;
  }
}
</style>