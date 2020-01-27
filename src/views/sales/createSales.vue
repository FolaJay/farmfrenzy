<template>
  <div class="bg-white w-12/12 p-5">
    <dateDate
      v-bind:placeholder="'dd/mm/yy'"
      v-bind:label="'Date'"/>
    <inputText
      v-bind:placeholder="'Customer name'"
      v-bind:label="'Customer name'"/>
    <dropdown
      v-bind:label="'Country'"/>
    <inputText
      v-bind:label="'Tanks'"/>
    <inputText
      v-bind:label="'Qty(kg)'"/>
    <inputText
      v-bind:label="'No. of Fish'"/>
    <inputText
      v-bind:label="'Unit Price(#)'"/>
    <saveButton v-bind:value="'Save'"/>
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
