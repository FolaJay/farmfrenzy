<template>
  <div class="flex flex-col flex-no-wrap py-2">
    <label class="mx-3 my-1 text-sm">{{label}}</label>
    <input
      class="appearance-none block w-full
      bg-gray-100 text-gray-700 border
      border-gray-200 rounded py-3 px-4 mb-3
      leading-tight focus:outline-none
      focus:bg-white" id="grid-first-name" type="text" :placeholder="placeholder">
  </div>
</template>
<style lang="scss" scoped>
input[type='text'] {
  // min-width: 350px;
}
</style>
<script>
export default {
  props: ['placeholder', 'label'],
};
</script>
