<template>
  <div class="pinput">
    <div class="per-inputunitL">星期：</div>
    <div class="per-inputunit">kWh</div>
    <div class="per-inputwrapR">
      <input type="text" text placeholder="请输入">
      <div class="per-inputborder"></div>
    </div>
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
  position: relative;
  height: 30px;
  line-height: 30px;
  background: #fff;
}

.pinput .per-inputunit {
  float: right;
  color: #5478a4;
  box-sizing: border-box;
  padding: 0 10px;
  height: 100%;
  position: relative;
  z-index: 2;
  align-items: center;
  display: flex;
}

.pinput .per-inputwrap {
  line-height: 30px;
  overflow: hidden;
  height: 100%;
}

.pinput input[type="text"],
input[type="password"],
textarea {
  border-color: #cacaca;
  border-width: 1px;
  border-style: solid;
  background: #fff;
}
</style>



<script>
export default {
  name: "pinput"
};
</script>
