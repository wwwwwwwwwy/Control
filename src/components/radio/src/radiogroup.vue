<template>
  <div>
    <pradio
      v-for="(item,index) in datasource"
      :key="index"
      v-model="selected"
      :name="nametype"
      :disabled="disabled.indexOf(item)!=-1"
      @change="handleClick"
      :label="item"
    >{{name?item[name]:item}}</pradio>
  </div>
</template>

<script>
export default {
  name: "pradiogroup",
  data() {
    return {
      nametype: new Date().getTime().toString() + Math.random().toString()
    };
  },
  props: {
    datasource: {
      type: Array,
      default: () => []
    },
    name: String,
    disabled: {
      type: Array,
      default: () => []
    },
    selected: {}
  },
  methods: {
    handleClick(model) {
      this.$emit("change", model);
    }
  }
};
</script>