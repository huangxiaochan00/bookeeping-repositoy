<template>
  <div>
    <Layout class-prefix="money">
      <NumberPad />
      <Type />
      <Note />
      <Tag />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tag from "@/components/Tag.vue";
import NumberPad from "@/components/NumberPad.vue";
import Note from "@/components/Note.vue";
import Type from "@/components/Type.vue";
export default {
  name: "Money",
  components: {
    Tag,
    NumberPad,
    Note,
    Type,
  },
};
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
