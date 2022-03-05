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
          :value="currentTag.name"
          file-name="标签名"
          placeholder="在这里修改标签名"
          @update:value="updateTag"
        />
      </div>
      <div class="button-wrapper">
        <Button @click="removeTag">删除标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Note from "@/components/Note.vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import Button from "@/components/Button.vue";
// import store from "@/store/index2";
@Component({
  components: {
    Note,
    Button,
  },
})
export default class EditTag extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }
  created() {
    this.$store.commit("findTag", this.$route.params.id);
    if (!this.currentTag) {
      this.$router.replace("/404");
    }
  }

  removeTag() {
    // console.log("d");

    if (this.currentTag) {
      this.$store.commit("removeTag", this.currentTag.id);
      alert("删除成功！");
      this.$router.back();
    }
  }
  goBack() {
    if (!this.currentTag.name) {
      alert("标签名不能为空");
      return;
    }
    this.$router.back();
  }
  updateTag(name: string) {
    console.log(name);
    if (this.currentTag) {
      this.$store.commit("updateTag", { id: this.currentTag.id, name });
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