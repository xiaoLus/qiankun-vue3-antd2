<template>
  <div>
    <h2>{{ options.length }} Items</h2>
    <a-select
      v-model:value="value"
      mode="multiple"
      style="width: 100%"
      placeholder="Please select"
      :options="options"
    />
  </div>
</template>
<script>
import { reactive } from 'vue';
const options = [];
for (let i = 0; i < 10000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    value,
    disabled: i === 10,
  });
}
export default {
  setup() {
    const state = reactive({
      options,
      value: ['a10', 'c12'],
    });
    return state;
  },
};
</script>