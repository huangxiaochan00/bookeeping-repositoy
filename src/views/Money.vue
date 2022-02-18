<template>
  <Layout class-prefix="money">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord" />
    <Type :type.sync="record.type" />
    <Note @update:note="onUpdateNote" />
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
import model from "@/model.ts";

@Component({
  components: {
    Tag,
    NumberPad,
    Note,
    Type,
  },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "吃"];
  record: RecordItem = {
    tag: this.tags[0],
    note: "",
    type: "-",
    amount: 0,
  };
  recordList: RecordItem[] = model.fetch();

  onUpdateSelected(tag: string) {
    this.record.tag = tag;
  }

  onUpdateNote(note: string) {
    this.record.note = note;
  }
  saveRecord() {
    const record2 = model.clone(this.record);
    record2.createAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordChange() {
    model.save(this.recordList);
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
