<template>
  <div pc class="per-combobox-basic" _pt="pcombobox-normal" _id="bfffebjgeacajgaaheh">
    <div cheader class="per-combobox-title" title>
      <span class="per-combobox_name" cheadertext>先选择项目</span>
      <span class="per-combobox_icon">v</span>
    </div>
    <div
      class="per-combobox-wrap _combobox_bottom _combobox_left"
      style="display: block;"
      pdisabled="false"
    >
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
<script>
export default {
  name: "pcombobox"
};
</script>
