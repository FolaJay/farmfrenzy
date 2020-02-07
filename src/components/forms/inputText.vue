<template>
  <div class="flex flex-col flex-no-wrap py-2">
    <label :for="id" class="mx-3 my-1 text-sm">{{label}}</label>
    <input
      class="appearance-none block w-full
      bg-gray-100 text-gray-700 border
      border-gray-200 rounded py-3 px-4 mb-3
      leading-tight focus:outline-none
      focus:bg-white" :id="id" type="text" :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)">
  </div>
</template>
<style lang="scss" scoped>
input[type='text'] {
  outline: none;
}
</style>
<script>
export default {
  props: ['placeholder', 'id', 'label', 'value'],
};
</script>
