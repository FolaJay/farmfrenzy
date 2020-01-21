<template>
  <div>
    <label>{{label}}</label>
    <input type="text" :placeholder="placeholder">
  </div>
</template>
<style lang="scss" scoped>
input {
  padding: 5px 15px;
  margin: 7px;
}
</style>
<script>
export default {
  props: ['placeholder', 'label'],
};
</script>
