<template>
  <label>
    <div class="pradio" :class="[{
      'is_disabled':disabled
    }]">
      <span class="pradio_input" :class="label===value?'pradio_input_checked':''">
        <input v-if="!disabled" type="radio" class="pradio_dom" :name="name" @change="handleClick">
      </span>
      <span class="pradio_label" v-if="$slots.default">
        <slot></slot>
      </span>
    </div>
  </label>
</template>

<style lang="scss">
.pradio {
  &.is_disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.3;
  }
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

    .pradio_dom {
      opacity: 0;
      margin: 0;
      margin-top: 50%;
      margin-left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }

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
    margin-left: 4px;
    font-size: 14px;
    margin-right: 8px;
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
    name: String
  },
  methods: {
    handleClick() {
      this.$emit("change", this.label);
    }
  }
};
</script>
