<template>
  <Layout class-prefix="money">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord" />
    <div class="wrapper">
      <Note
        file-name="备注"
        placeholder="在这里添加备注"
        :value.sync="record.note"
        class="note"
      />
      <Note
        file-name=""
        type="date"
        placeholder="在这里添加备注"
        :value.sync="record.createAt"
        class="date"
      />
    </div>

    <!-- {{ this.record.createAt }} -->
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
    createAt: new Date().toISOString(),
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
  onUpdateDate(date: string) {
    this.record.createAt = date;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
    this.record.type = "-";
    this.record.note = "";
  }
}
</script>

<style lang='scss'>
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
.wrapper {
  display: flex;
  padding: 4px;
  align-items: center;
}
.note {
  margin: 8px 0;
}
.date {
  width: auto;
  /* height: 33px; */
}
</style>
