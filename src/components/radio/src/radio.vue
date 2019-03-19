<template>
  <label>
    <div class="pradio" @click="handleClick">
      <input type="radio" name id>
      <span class="pradio_input" :class="label===value?'pradio_input_checked':''"></span>
      <span class="pradio_label" v-if="$slots.default">
        <slot></slot>
        {{label===value}}
      </span>
    </div>
  </label>
</template>

<style lang="scss">
.pradio {
  overflow: hidden;
  color: #5478a4;
  line-height: 16px;
  cursor: pointer;
  display: inline-block;
  .pradio_input {
    float: left;
    width: 16px;
    height: 16px;
    border: 1px solid #6f8fb5;
    border-radius: 100%;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    background: #fff;

    &.pradio_input_checked {
      border: 2px solid #6f8fb5;
      &::before {
        background: #6f8fb5;
        content: "";
        position: absolute;
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  }
  .pradio_label {
    float: left;
    margin-left: 8px;
    font-size: 14px;
  }
}
</style>


<script>
export default {
  name: "pradio",
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },
  methods: {
    handleClick() {
      this.value = this.label;
      this.$emit("change", this.value);
    }
  },
  mounted() {
    console.log(this);
  }
};
</script>
