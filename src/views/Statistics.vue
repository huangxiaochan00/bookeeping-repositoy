<template>
  <div>
    <Layout>
      <Tab :value.sync="type" :dataSource="typeList" class-prefix="type" />
      <div class="data" v-if="groupList.length > 0">
        <ol>
          <li v-for="(group, index) in groupList" :key="index">
            <h3 class="title">
              {{ beautify(group.title) }}<span>￥{{ group.total }}</span>
            </h3>

            <ol>
              <li v-for="item in group.items" :key="item.id" class="record">
                <span>{{ item.tag }}</span>
                <span class="notes">{{ item.note }}</span>
                <span>￥{{ item.amount }}</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div class="nodata" v-else>目前还没有记账记录哟~</div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator";
import Vue from "vue";
import Tab from "@/components/Tab.vue";
import typeList from "../constants/typeList";
import dayjs from "dayjs";
import clone from "../lib/clone";
@Component({
  components: {
    Tab,
  },
})
export default class Statistics extends Vue {
  get recordList() {
    return (this.$store.state as MyState).recordList;
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日");
    } else {
      return day.format("YYY年M月D日");
    }
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  get groupList() {
    type Result = { title: string; total?: number; items: RecordItem[] }[];
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = clone(recordList)
      .filter((r) => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf()
      );
    const result = [
      {
        title: dayjs(newList[0].createAt).format("YYYY-MM-DD"),
        items: [newList[0]],
        total: newList[0].amount,
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), "day")) {
        last.items.push(current);
        last.total += current.amount;
      } else {
        result.push({
          title: dayjs(current.createAt).format("YYYY-MM-DD"),
          items: [current],
          total: current.amount,
        });
      }
    }
    return result;
  }
  type = "-";
  interval = "day";
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
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
.nodata {
  padding: 40px;
  text-align: center;
}
</style>
