<template>
  <div>
    <Layout class-prefix="money">
      {{ record }}
      <NumberPad :amount="record.amount" @update:amount="onUpdateAmount" />
      <Type :type.sync="record.type" />
      <Note @update:note="onUpdateNote" />
      <Tag :dataSource.sync="tags" @update:selected="onUpdateSelected" />
    </Layout>
  </div>
</template>

<script lang='ts'>
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import Tag from "@/components/Tag.vue";
import NumberPad from "@/components/NumberPad.vue";
import Note from "@/components/Note.vue";
import Type from "@/components/Type.vue";
type Record = {
  tag: string;
  note: string;
  type: string;
  amount: number;
};
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
  record: Record = {
    tag: this.tags[0],
    note: "",
    type: "-",
    amount: 0,
  };
  onUpdateSelected(tag: string) {
    this.record.tag = tag;
    // console.log(tag);
  }

  onUpdateNote(note: string) {
    this.record.note = note;
    // console.log(note);
  }
  onUpdateAmount(amount: string) {
    this.record.amount = parseFloat(amount);
    // console.log(amount);
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
