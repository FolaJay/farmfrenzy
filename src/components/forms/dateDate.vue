<template>
  <div>
    <label class="mx-3 my-1 text-sm">{{label}}</label>
    <input
      class="block appearance-none w-full
      bg-white border border-gray-200 bg-gray-100
      text-gray-700 py-3 px-4 pr-8 rounded
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      type = "date" :placeholder = "placeholder">
  </div>
</template>
<script>
export default {
  props: ['placeholder', 'label'],
};
</script>
