<template>
  <div>
    child
    <p>i am {{fathername}}'s son</p>
  </div>
</template>
<script>
export default {
  name: "child",
  inject: ["fathername"]
};
</script>

