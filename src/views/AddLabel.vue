<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon name="back" @click="goBack" />
        <span>添加标签</span>
        <Icon name="finish" @click="ensure" />
      </div>
      <div class="tag">
        <ol>
          <li
            :class="{ selected: selectedTag === tag.name }"
            v-for="(tag, index) in defaultTag"
            :key="index"
            @click="selected(tag.name)"
          >
            <Icon :name="`${tag.icon}`" />
            {{ tag.name }}
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Note from "@/components/Note.vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import clone from "@/lib/clone";

@Component({
  components: {
    Note,
    Button,
  },
})
export default class AddLabel extends Vue {
  selectedTag = "";
  y: Tag[] = [];
  get defaultTag() {
    const tagList: Tag[] = this.$store.state.tagList;
    const defaultTags = this.$store.state.defaultTags;
    for (let i = 0; i < defaultTags.length; i++) {
      let m = true;
      for (let j = 0; j < tagList.length; j++) {
        if (defaultTags[i].name === tagList[j].name) {
          m = false;
          break;
        }
      }
      if (m) {
        this.y.push(defaultTags[i]);
      }
    }
    return this.y;
  }
  selected(tag: string) {
    this.selectedTag = tag;
  }
  created() {
    this.$store.commit("fetchTag");
  }
  ensure() {
    const tag = clone(this.y).filter((r) => r.name === this.selectedTag)[0];
    this.$store.commit("createTag", tag);
    this.$router.back();
  }
  goBack() {
    this.$router.back();
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
  > .icon {
    font-size: 30px;
    padding: 0px 5px;
  }
}
.tag {
  width: 100%;
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
      > .icon {
        font-size: 40px;
      }
    }
  }
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