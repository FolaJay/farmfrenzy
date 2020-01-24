<template>
  <div>
    <textarea name= "remark" :placeholder="placeholder">
      Remarks...
    </textarea>
  </div>
</template>
<script>
export default {
  props: ['placeholder', 'label'],
};
</script>
