<template>
  <div>
    <Layout>
      <Tab :value.sync="type" :dataSource="typeList" class-prefix="type" />
      <Tab
        :value.sync="interval"
        :dataSource="intervalList"
        class-prefix="interval"
      />

      <ol>
        <li v-for="(group, index) in result" :key="index">
          <h3 class="title">{{ group.title }}</h3>

          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{ item.tag }}</span>
              <span class="notes">{{ item.note }}</span>
              <span>￥{{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator";
import Vue from "vue";
import Tab from "@/components/Tab.vue";
import intervalList from "../constants/intervalList";
import typeList from "../constants/typeList";
@Component({
  components: {
    Tab,
  },
})
export default class Statistics extends Vue {
  get recordList() {
    return (this.$store.state as MyState).recordList;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  get result() {
    type hashValue = { title: string; items: RecordItem[] };
    const hashTable: { [key: string]: hashValue } = {};
    const { recordList } = this;
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createAt.split("T");
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;

    // return hashTable;
  }
  get yyy() {
    return "dfdf";
  }
  type = "-";
  interval = "day";
  intervalList = intervalList;
  typeList = typeList;
}
</script>

<style scoped lang='scss'>
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background: white;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
::v-deep .type-tabs-item {
  // border: 1px red solid;
  // padding: 8px 0;
  &.selected {
    background: #c4c4c4;
    // border: 1px red solid;
    &::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs-item {
  // height: 32px;
  text-align: center;
  // font-size: 16px;
  // border: 1px red solid;
  // padding-top: 4px;
  // &.selected {
  //   background: #c4c4c4;
  //   // border: 1px red solid;
  //   &::after {
  //     display: none;
  //   }
  // }
}
</style>
