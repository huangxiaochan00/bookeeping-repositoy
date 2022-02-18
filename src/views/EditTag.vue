<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon name="back" @click="goBack" />
        <span>编辑标签</span>
        <div></div>
      </div>
      <div class="form">
        <Note
          :value="tag.name"
          file-name="标签名"
          placeholder="在这里修改标签名"
          @update:note="updateTag"
        />
      </div>
      <div class="button-wrapper">
        <Button @click="remove">删除标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//import Nav from "@/components/Nav.vue";
import Note from "@/components/Note.vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel.ts";
import Button from "@/components/Button.vue";

@Component({
  components: {
    Note,
    Button,
  },
})
export default class EditTag extends Vue {
  tag?: { id: string; name: string } = undefined;
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    // console.log(tag);

    if (!tag) {
      this.$router.replace("/404");
    } else {
      this.tag = tag;
    }
  }
  remove() {
    if (this.tag) {
      tagListModel.remove(this.tag.id);
    }
  }
  goBack() {
    if (!this.tag.name) {
      alert("标签名不能为空");
      return;
    }
    this.$router.back();
  }
  updateTag(name: string) {
    if (this.tag) {
      tagListModel.update(this.tag.id, name);
    }
  }
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