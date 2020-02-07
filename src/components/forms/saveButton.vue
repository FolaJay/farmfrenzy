<template>
  <div>
    <button
      class="flex items-center h-auto content-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="submit">{{value}}
      <loading v-if="loading"/>
    </button>
  </div>
</template>
<script>
export default {
  props: ['value', 'loading'],
  data() {
    return {
    };
  },
};
</script>
