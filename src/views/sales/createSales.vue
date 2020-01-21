<template>
  <div>
    <h2>Create Sales</h2>
    <dateDate
      v-bind:placeholder="'dd/mm/yy'"/>
    <!-- <inputText
      v-bind:placeholder="'Stock id'"/> -->
    <inputText
      v-bind:placeholder="'Customer name'"
      v-bind:label="'Customer name'"/>
    <dropdown/>
    <inputText
      v-bind:label="'Tanks'"/>
    <inputText
      v-bind:label="'Qty(kg)'"/>
    <inputText
      v-bind:label="'No. of Fish'"/>
    <inputText
      v-bind:label="'Unit Price(#)'"/>
    <saveButton/>
    <router-link to="/sales/view">view sales</router-link>
  </div>
</template>
<script>
import inputText from '@/components/forms/inputText.vue';
import dateDate from '@/components/forms/dateDate.vue';
import dropdown from '@/components/forms/dropdown.vue';
import saveButton from '@/components/forms/saveButton.vue';

export default {
  components: {
    inputText,
    dateDate,
    dropdown,
    saveButton,
  },
};
</script>
