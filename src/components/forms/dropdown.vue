<template>
  <div class="relative">
    <label class="mx-3 my-1 text-sm">{{label}}</label>
    <select class="block appearance-none w-full
      bg-white border border-gray-200 bg-gray-100
      text-gray-700 py-3 px-4 pr-8 rounded
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
      :value="value"
      @input="$emit('input', $event.target.value)">
      <option value="Cat fish">Cat fish</option>
    </select>
    <div class="pointer-events-none absolute
      inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
</template>
<script>
export default {
  props: ['placeholder', 'label', 'value'],
};
</script>
<style lang="scss" scoped>

</style>
