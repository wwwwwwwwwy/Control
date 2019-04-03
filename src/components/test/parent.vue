<template>
  <div>
    parent
    <child></child>
  </div>
</template>
<script>
import child from "./child";
export default {
  name: "parent",
  data() {
    return {
      name: "leo"
    };
  },
  provide() {
    return {
      fathername: this.name
    };
  },
  components: {
    child
  }
};
</script>