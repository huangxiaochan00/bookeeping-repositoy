<template>
  <Layout class-prefix="money">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord" />
    <Type :type.sync="record.type" />
    <Note
      file-name="备注"
      placeholder="在这里添加备注"
      @update:note="onUpdateNote"
    />
    <Tag :dataSource.sync="tags" @update:selected="onUpdateSelected" />
  </Layout>
</template>

<script lang='ts'>
import { Component, Prop, Watch } from "vue-property-decorator";
import Vue from "vue";
import Tag from "@/components/Tag.vue";
import NumberPad from "@/components/NumberPad.vue";
import Note from "@/components/Note.vue";
import Type from "@/components/Type.vue";
import recordListModel from "@/models/recordListModel.ts";
import tagListModel from "../models/tagListModel";

@Component({
  components: {
    Tag,
    NumberPad,
    Note,
    Type,
  },
})
export default class Money extends Vue {
  tags = tagListModel.fetch();
  record: RecordItem = {
    tag: this.tags[0].id,
    note: "",
    type: "-",
    amount: 0,
  };
  recordList: RecordItem[] = recordListModel.fetch();

  onUpdateSelected(tag: string) {
    this.record.tag = tag;
  }

  onUpdateNote(note: string) {
    this.record.note = note;
  }
  saveRecord() {
    const record2 = recordListModel.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordChange() {
    recordListModel.save(this.recordList);
  }
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
