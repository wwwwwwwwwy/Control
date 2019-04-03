<template>
  <input type="radio" name="leo" :checked="checked" @change="log">
</template>

<script>
import { debug } from "util";
export default {
  name: "basecheckbox",
  props: {
    checked: Number,
    label: Number
  },
  model: {
    prop: "checked",
    event: "change"
  },
  methods: {
    log() {
      debugger;
      this.$emit("change", this.label);
    }
  }
};
</script>
