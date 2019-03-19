<template>
  <div>
    <div>
      <h2>Type</h2>
      <pbutton>Hello</pbutton>
      <pbutton :type="'primary'">World</pbutton>
      <pbutton :type="'danger'">Leo</pbutton>
    </div>
    <div>
      <h2>Disabled</h2>
      <pbutton :disabled="true">Hello</pbutton>
      <pbutton :type="'primary'" :disabled="true">World</pbutton>
      <pbutton :type="'danger'" :disabled="true">Leo</pbutton>
    </div>
    <div>
      <h2>Loading</h2>
      <pbutton :loading="true">Hello</pbutton>
      <pbutton :type="'primary'" :loading="true">World</pbutton>
      <pbutton :type="'danger'" :loading="true">Leo</pbutton>
    </div>
    <div>
      <h2>Icon</h2>
      <pbutton :icon="'A'">Hello</pbutton>
      <pbutton :type="'primary'" :icon="'B'">World</pbutton>
      <pbutton :type="'danger'" :icon="'C'">Leo</pbutton>
      <pbutton :type="'danger'" :icon="'D'">Leo</pbutton>
    </div>
    <div>
      <h2>Shape</h2>
      <pbutton :icon="'A'">Hello</pbutton>
      <pbutton :type="'primary'" :icon="'B'" round>World</pbutton>
      <pbutton :type="'danger'" :icon="'C'" circle></pbutton>
      <pbutton :type="'danger'" :icon="'D'" rectangle></pbutton>
    </div>
    <div>
      <h2>Click</h2>
      <pbutton :type="'primary'" @click="say">Hello</pbutton>
      <pbutton :type="'danger'" @click="say">World</pbutton>
      <pbutton @click="say">Leo</pbutton>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    say() {
      console.log(arguments);
    }
  }
};
</script>

