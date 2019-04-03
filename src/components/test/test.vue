<template>
  <div>
    {{val}}
    <basecheckbox v-model="val" :label="1"></basecheckbox>
    <basecheckbox v-model="val" :label="2"></basecheckbox>
    <basecheckbox v-model="val" :label="3"></basecheckbox>
  </div>
</template>

<script>
import basecheckbox from "./basecheckbox";

export default {
  data() {
    return {
      name: "test",
      val: 1
    };
  },
  components: {
    basecheckbox
  },
  methods: {
    // log() {
    //   console.log(arguments);
    // }
  },
  mounted() {
    window.leo = this;
  }
};
</script>

