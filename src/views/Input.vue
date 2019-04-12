<template>
  <div>
    <h2>基本文本框</h2>
    <div>
      <p>普通文本框</p>
      <pinput v-model="text"/>
      <span>{{text}}</span>
    </div>
    <div>
      <p>验证文本框</p>
      <pinput :check="/\d+/" v-model="text"/>
      <span>{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>

