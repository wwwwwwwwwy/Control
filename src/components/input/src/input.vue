<template>
  <div class="pinput" :class="[focus?'focus':'default',error?'error':'']">
    <div class="per-text left" v-if="false">星期：</div>
    <div class="per-center">
      <input
        ref="input"
        v-model="model"
        @focus="focusHandler"
        @blur="blurHandler"
        type="text"
        placeholder="请输入"
      >
      {{error}}
      <div class="per-inputborder"></div>
    </div>
    <div class="per-text right" v-if="false">kWh</div>
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
  border: 1px solid #f97c7c !important;
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
import { debug } from "util";
export default {
  name: "pinput",
  data() {
    return {
      focus: false,
      error: false
    };
  },
  props: {
    width: {
      type: Number,
      default: () => 245
    },
    check: {
      type: Function | RegExp
    },
    value: {
      type: String,
      default: () => ""
    }
  },
  methods: {
    focusHandler() {
      let bool = this.$emit("focus");
      if (bool === false) return;
      this.focus = true;
    },
    blurHandler() {
      debugger;
      let bool = this.$emit("blur");
      if (bool === false) return;
      this.focus = false;
      if (Object.prototype.toString.call(this.check) == "Function")
        this.error = this.check();
      if (Object.prototype.toString.call(this.check).slice(8, -1) == "RegExp")
        this.error = !this.check.test(this.model);
      this.$emit("input", this.value);
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
