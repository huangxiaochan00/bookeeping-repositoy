<template>
  <Layout class-prefix="money">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord" />
    <Type :type.sync="record.type" />
    <Note
      file-name="备注"
      placeholder="在这里添加备注"
      @update:note="onUpdateNote"
      :value="record.note"
    />
    <Tag @update:selected="onUpdateSelected" />
    <!-- <Tag /> -->
  </Layout>
</template>

<script lang='ts'>
import { Component, Watch } from "vue-property-decorator";
import Vue from "vue";
import Tag from "@/components/Tag.vue";
import NumberPad from "@/components/NumberPad.vue";
import Note from "@/components/Note.vue";
import Type from "@/components/Type.vue";
// import recordListModel from "@/models/recordListModel.ts";
// import tagListModel from "../models/tagListModel";
// import store from "@/store/index2";
@Component({
  components: {
    Tag,
    NumberPad,
    Note,
    Type,
  },
  computed: {
    recordList() {
      return this.$store.state.recordList;
    },
  },
})
export default class Money extends Vue {
  // tags = store.tagList;
  // recordList = store.recordList;
  record: RecordItem = {
    tag: "",
    note: "",
    type: "-",
    amount: 0,
  };
  // recordList: RecordItem[] = recordListModel.fetch();
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateSelected(tag: string) {
    this.record.tag = tag;
  }
  onUpdateNote(note: string) {
    this.record.note = note;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
    this.record.type = "-";
    this.record.note = "";
    this.record.amount = 0;
  }
  // onUpdateAmount() {
  //   this.record.amount = 0;
  //   console.log("d");
  // }
  // @Watch("recordList")
  // onRecordChange() {
  //   recordListModel.save(this.recordList);
  // }
}
</script>

<style lang='scss'>
.money-content {
  border: 1px green solid;
  display: flex;
  flex-direction: column-reverse;
}
.wrapper {
  padding: 4px;
  align-items: center;
}
</style>
