<template>
  <div class="note">
    <label>
      <template v-if="type === 'date'">
        <span class="name">{{ this.fileName }}</span>
        <input
          :type="type || 'text'"
          :value="x(value)"
          :placeholder="placeholder"
          @input="onChangeValue($event.target.value)"
        />
      </template>
      <template v-else>
        <span class="name">{{ this.fileName }}</span>
        <input
          :type="type || 'text'"
          :value="value"
          :placeholder="placeholder"
          @input="onChangeValue($event.target.value)"
        />
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Note extends Vue {
  @Prop({ default: "" }) readonly value!: string;
  @Prop({ required: true }) fileName!: string;
  @Prop() placeholder?: string;
  @Prop() type?: string;
  @Prop() classPrefix?: string;
  onChangeValue(value: string) {
    this.$emit("update:value", value);
  }
  x(isoString: string) {
    return dayjs(isoString).format("YYYY-MM-DD");
  }
}
</script>

<style scoped lang="scss">
.note {
  background: rgb(244, 246, 245);
  font-size: 14px;
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