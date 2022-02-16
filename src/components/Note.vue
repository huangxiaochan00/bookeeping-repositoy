<template>
  <div class="note">
    <label>
      <span>备注</span>
      <input />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
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
    }
  }
}
</style>