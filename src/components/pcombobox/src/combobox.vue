<template>
  <div pc class="pcombobox">
    <div class="pcombobox_title">
      <span class="pcombobox_title_name">先选择项目</span>
      <span class="pcombobox_title_icon">v</span>
    </div>
    <div class="pcombobox_dropdown" style="display: block;">
      <div class="_combobox_flex" flex>
        <div class="per-combobox-con" style="display: inline-block;" level="1">
          <div style="max-width: 198px; max-height: 150px;">
            <div class="per-scrollbar_wrap" scrollparent>
              <div class="per-scrollbar_actual" scroll>
                <ul conul _id="bfffebjgeacajgaaheh" _pt="pcombobox-normal">
                  <li class="per-combobox_item" level="1" title>
                    <span class="per-checkbox_input"></span>
                    <b>1号</b>
                    <i class="per-combobox_item_iconR">Z</i>
                  </li>
                  <li class="per-combobox_item" level="1" title>
                    <span class="per-checkbox_input"></span>
                    <b>2号</b>
                    <i class="per-combobox_item_iconR">Z</i>
                  </li>
                  <li class="per-combobox_item" level="1" title>
                    <span class="per-checkbox_input"></span>
                    <b>3号</b>
                    <i class="per-combobox_item_iconR">Z</i>
                  </li>
                  <li class="per-combobox_item" level="1" title>
                    <span class="per-checkbox_input"></span>
                    <b>4号</b>
                    <i class="per-combobox_item_iconR">Z</i>
                  </li>
                  <li class="per-combobox_item" level="1" title>
                    <span class="per-checkbox_input"></span>
                    <b>5号</b>
                    <i class="per-combobox_item_iconR">Z</i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="per-scrollbar__bar per-is-horizontal" horizontal style="display: none;">
              <div class="per-scrollbar__thumb" horizontalbar style="transform: translateX(0%);"></div>
            </div>
            <div class="per-scrollbar__bar per-is-vertical" vertical style="display: none;">
              <div class="per-scrollbar__thumb" verticalbar style="transform: translateY(0%);"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="error-tip" err>
      <em errtext></em>
    </div>
  </div>
</template>

<style>
.pcombobox {
  position: relative;
  height: 30px;
}

.pcombobox_title {
  width: 100%;
  display: inline-block;
  height: 30px;
  font-size: 14px;
  line-height: 28px;
  border-radius: 2px;
  padding-left: 13px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #cacaca;
  color: #5c649c;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 36px;
  z-index: 2;
}

.pcombobox_title_name {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.pcombobox_title_icon {
  font-family: "perficon";
  font-size: 14px;
  position: absolute;
  right: 10px;
  top: 0;
}

.pcombobox_dropdown {
  position: absolute;
  box-sizing: border-box;
  min-width: 100%;
  top: 29px;
  color: #333;
  z-index: 4;
  white-space: nowrap;
  font-size: 0;
  padding-top: 1px;
  margin-top: -1px;
  line-height: 1;
}
</style>


<script>
export default {
  name: "pcombobox",
  mounted() {
    console.log(Object.prototype.toString.call(this.$slots.dropdown));
  }
};
</script>
