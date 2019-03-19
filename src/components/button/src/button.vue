<template>
  <button
    class="p_button"
    @click="handleClick"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
    type?'p_button_' + type : 'p_button_default',
    {
        'is_disabled': buttonDisabled,
        'is_round': round,
        'is_circle': circle,
        'is_rectangle':rectangle
    }
  ]"
  >
    <i class="is_loading" v-if="loading">
      <svg
        version="1.1"
        id="loader-1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="40px"
        height="40px"
        viewBox="0 0 50 50"
        style="enable-background:new 0 0 50 50;"
        xml:space="preserve"
      >
        <path
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          ></animateTransform>
        </path>
      </svg>
    </i>
    <span class="is_icon" v-if="icon" v-text="icon"></span>
    <span class="text" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.p_button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 0 14px;
  height: 30px;
  font-size: 14px;
  border-radius: 2px;
  min-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0px;
  margin-right: 15px;
  margin-bottom: 0px;
  margin-left: 15px;

  &:hover {
    opacity: 0.8;
  }

  .text {
    vertical-align: middle;
  }

  &.is_disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.3;
  }

  &.is_rectangle {
    width: 30px;
    min-width: initial;
    padding: 0;
  }

  &.is_round {
    border-radius: 15px;
  }

  &.is_circle {
    width: 30px;
    min-width: initial;
    padding: 0;
    border-radius: 50%;
  }

  .is_icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    font-family: "perficon";
    vertical-align: middle;
    text-align: center;
    line-height: 20px;
  }

  .is_loading {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 100%;
    background-size: cover;
    vertical-align: middle;
    svg {
      width: 18px;
      height: 18px;
      animation: loading-rotate 2.1s linear infinite;
      animation: loading-dash 1.8s ease-in-out infinite;
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      stroke-width: 2;
      stroke-linecap: round;
    }
  }
}

// 默认
.p_button_default {
  background: #fff;
  border: 1px solid #cecece;
  color: #5478a4;

  path {
    fill: #5478a4;
  }
}
// 主要
.p_button_primary {
  background: #6f8fb5;
  color: #fff;
  border: 1px solid #6f8fb5;

  path {
    fill: #fff;
  }
}
// 危险
.p_button_danger {
  background: #f06f6f;
  color: #fff;
  border: 1px solid #f06f6f;
  path {
    fill: #fff;
  }
}
</style>


<script>
export default {
  name: "pbutton",
  inject: [],
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    loading: Boolean,
    disabled: Boolean,
    // plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    rectangle: Boolean
    // rectangle: {
    //   type: Boolean,
    //   default: true
    // }
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
      //   return this.disabled || (this.pForm || {}).disabled;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
