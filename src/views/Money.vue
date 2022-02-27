<template>
  <Layout class-prefix="money">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord" />
    <!-- <Tab
      :value.sync="record.type"
      :dataSource="typeList"
      class-prefix="money"
    /> -->
    <Tab :value.sync="record.type" :dataSource="typeList" class-prefix="type" />
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
import Tab from "@/components/Tab.vue";
import typeList from "../constants/typeList";
@Component({
  components: {
    Tag,
    NumberPad,
    Note,
    Tab,
  },
})
export default class Money extends Vue {
  record: RecordItem = {
    tag: "",
    note: "",
    type: "-",
    amount: 0,
  };
  typeList = typeList;
  get recordList() {
    return this.$store.state.recordList;
  }
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
// ::v-deep .type-tabs-item {
//   // border: 1px red solid;
//   padding: 8px 0;
//   border: 1px red solid;
// }
</style>
