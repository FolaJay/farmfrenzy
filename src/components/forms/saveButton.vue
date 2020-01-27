<template>
  <div>
    <button
      class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button">{{value}}
      <loading/>
    </button>
  </div>
</template>
<script>
export default {
  props: ['value'],
};
</script>
