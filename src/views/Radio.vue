<template>
  <div>
    <div>
      <h2>Type</h2>
      <pradio v-model="radio" label="1">1</pradio>
      <pradio v-model="radio" label="2">2</pradio>
      <pradio v-model="radio" label="3">3</pradio>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      radio: "1"
    };
  },
  methods: {
    say() {
      console.log(arguments);
    }
  }
};
</script>

