<template>
  <div>
    <div>
      <h2>Radio</h2>
      <pradio
        v-model="radio"
        @input="handlerInput"
        name="'rdo'"
        @change="changeState"
        label="{a: 1}"
      >11111</pradio>
      <pradio v-model="radio" name="'rdo'" @change="changeState" label="{a: 2}">22222</pradio>
      <pradio
        v-model="radio"
        name="'rdo'"
        :disabled="true"
        @change="changeState"
        label="{a: 3}"
      >33333</pradio>
    </div>
    <!-- <div>
      <h2>pradiogroup</h2>
      <pradiogroup
        @change="listChangeState"
        :name="'name'"
        :selected="selected"
        :datasource="datasource"
        :disabled="disabled"
      ></pradiogroup>
    </div>-->
    <div>
      <h2>for</h2>
      <p>{{radio}}</p>
      <pradio v-for="(item,index) in datasource" :key="index" v-model="radio" :label="item">11111</pradio>
    </div>
  </div>
</template>

<script>
let datasource = [
  {
    name: "Tom",
    id: 1
  },
  {
    name: "Jerry",
    id: 2
  },
  {
    name: "Jack",
    id: 3
  }
];
let disabled = datasource.filter(function(item) {
  return item.id == 3;
});
export default {
  props: {},
  data() {
    return {
      radio: {
        name: "Jack",
        id: 3
      },
      datasource,
      selected: {},
      disabled
    };
  },
  methods: {
    handlerInput() {
      console.log(arguments);
    },
    changeState(model) {
      this.radio = model;
    },
    listChangeState(model) {
      this.selected = model;
    }
  }
};
</script>

