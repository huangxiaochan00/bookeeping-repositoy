<template>
  <div class="note">
    <label>
      <span class="name">{{ this.fileName }}</span>
      <input
        type="text"
        :value="this.value"
        :placeholder="this.placeholder"
        @input="onChangeValue($event.target.value)"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Note extends Vue {
  @Prop({ default: "" }) readonly value!: string;
  @Prop({ require: true }) fileName!: string;
  @Prop() placeholder?: string;

  // @Watch("value")
  onChangeValue(value: string) {
    this.$emit("update:note", value);
  }
}
</script>

<style scoped lang="scss">
.note {
  // background: rgb(244, 246, 245);
  font-size: 18px;
  padding: 10px 0;
  // height: 60px;
  > label {
    display: flex;
    align-items: center;
    padding: 0 16px;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 32px;
      background: none;
      border: none;
      outline: none;
    }
  }
}
</style>