<template>
  <div class="pinput" :class="[focus?'focus':'default',showError?'error':'']">
    <div class="per-text left" v-if="prefix">星期：</div>
    <div class="per-center">
      <input
        ref="input"
        v-model="model"
        @focus="focusHandler"
        @blur="blurHandler"
        type="text"
        :placeholder="placeholder"
      >
      <div class="per-inputborder"></div>
    </div>
    <div class="per-text right" v-if="suffix">kWh</div>
    <p class="errortext" v-show="showError" v-text="errortext"></p>
  </div>
</template>

<style>
.pinput {
  position: relative;
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

.pinput.error {
  margin-bottom: 20px;
}

.pinput .errortext {
  position: absolute;
  margin: 0;
  top: 30px;
  left: 0;
  right: 0;
  font-size: 12px;
  line-height: 20px;
  color: #f97c7c;
  text-align: left;
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
    },
    errortext: {
      type: String,
      default: () => ""
    },
    prefix: {
      type: String,
      default: () => ""
    },
    suffix: {
      type: String,
      default: () => ""
    },
    placeholder: {
      type: String,
      default: () => ""
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    focusHandler() {
      let bool = this.$emit("focus");
      if (bool === false) return;
      this.focus = true;
    },
    blurHandler() {
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
    showError() {
      return !this.focus && this.error;
    },
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
