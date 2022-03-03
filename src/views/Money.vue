<template>
  <Layout class-prefix="money">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord" />

    <Note
      file-name="备注"
      placeholder="在这里添加备注"
      @update:note="onUpdateNote"
      :value="record.note"
    />
    <Tag @update:selected="onUpdateSelected" :type="record.type" />
    <Tab :value.sync="record.type" :dataSource="typeList" />
    <!-- <Tag /> -->
  </Layout>
</template>

<script lang='ts'>
import { Component, Watch } from "vue-property-decorator";
import Vue from "vue";
import Tag from "@/components/TagSection.vue";
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
    this.$store.commit("setCurrentType", "-");
  }
  onUpdateSelected(tag: string) {
    this.record.tag = tag;
  }
  onUpdateNote(note: string) {
    this.record.note = note;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
    // this.$store.commit("setCurrentType", "-");
    this.record.type = "-";
    this.record.note = "";
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
  display: flex;
  flex-direction: column-reverse;
}
.wrapper {
  padding: 4px;
  align-items: center;
}
</style>
