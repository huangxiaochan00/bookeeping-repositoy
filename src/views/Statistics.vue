<template>
  <div>
    <Layout>
      <Tab :value.sync="type" :dataSource="typeList" class-prefix="type-tabs" />
      <Tab :value.sync="interval" :dataSource="intervalList" />
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Watch } from "vue-property-decorator";
import Vue from "vue";
import Tab from "@/components/Tab.vue";
import intervalList from '../constants/intervalList';
import typeList from '../constants/typeList';
@Component({
  components: {
    Tab,
  },
})
export default class Statistics extends Vue {
  // components: { Nav },
  // name: "Statistics",
  // zzz = "type-tabs";
  type = "-";
  interval = "day";
  intervalList =intervalList;
  typeList =typeList;
}
</script>

<style scoped lang='scss'>
::v-deep .type-tabs-item {
  // border: 1px red solid;
  &.selected {
    background: #c4c4c4;
    // border: 1px red solid;
    &::after {
      display: none;
    }
  }
}
</style>
