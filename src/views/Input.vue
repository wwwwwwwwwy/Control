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
      <pinput :errortext="'必须是数字'" :check="/\d+/" v-model="text"/>
      <span>{{text}}</span>
    </div>
    <div>
      <p>头尾有内容</p>
      <p>
        <pinput :prefix="'星期'" v-model="text"/>
      </p>
      <p>
        <pinput
          :placeholder="'请输入数字'"
          :suffix="'kWh'"
          :errortext="'必须是数字'"
          :check="/\d+/"
          v-model="text"
        />
      </p>
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

