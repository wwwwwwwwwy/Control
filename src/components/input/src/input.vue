<template>
  <div class="pinput" :class="'default'">
    <div class="per-text left" v-if="false">星期：</div>
    <div class="per-center">
      <input ref="input" @focus="focusHandler" type="text" placeholder="请输入">
      <div class="per-inputborder"></div>
    </div>
    <div class="per-text right" v-if="false">kWh</div>
    {{focus}}
    <div class="reminder-tip" friendly>
      <em></em>
    </div>
    <div class="error-tip" err>
      <em errtext></em>
    </div>
  </div>
</template>

<style>
.pinput {
  width: 245px;
  display: flex;
  height: 30px;
  line-height: 30px;
  background: #fff;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-around;
  font-size: 14px;
}

.pinput .per-center {
  height: 30px;
  line-height: 30px;
  flex: 1;
}

.pinput .per-text {
  position: relative;
  color: #5478a4;
  box-sizing: border-box;
  padding: 0 10px;
}

.pinput .per-text.left::before {
  content: "";
  position: absolute;
  top: 50%;
  border-left: 1px solid #ccc;
  height: 16px;
  right: 0;
  margin-top: -8px;
}
.pinput .per-text.right::before {
  content: "";
  position: absolute;
  top: 50%;
  border-left: 1px solid #ccc;
  height: 16px;
  left: 0;
  margin-top: -8px;
}

.default {
  border: 1px solid #cacaca;
}

.focus {
  border: 1px solid #02a9d1;
}

.error {
  border: 1px solid #f97c7c;
}

.pinput .per-center input[type="text"] {
  color: #333;
  height: 30px;
  padding: 0 8px;
  width: 100%;
  line-height: 28px;
  box-sizing: border-box;
  margin: 0;
  border: none;
  outline: none;
}
</style>



<script>
export default {
  name: "pinput",
  data() {
    return {
      focus: false
    };
  },
  props: {
    width: {
      type: Number,
      default: () => 245
    }
  },
  methods: {
    focusHandler() {
      let bool = this.$emit("focus");
      if (bool === false) return;
      this.focus = true;
    },
    blurHandler() {
      // let bo
    }
  },
  computed: {}
};
</script>
