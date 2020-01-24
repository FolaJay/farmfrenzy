<template>
  <div>
    <h2>Create Feeding</h2>
    <!-- the input fields are to be dropdown based on the tanks created and in use -->
    <dateDate
      v-bind:placeholder="'dd/mm/yy'"/>
    <inputText
      v-bind:placeholder="'Feed'"
      v-bind:label="'Feed'"/>
    <inputText
      v-bind:placeholder="'Tank'"
      v-bind:label="'Tank'"/>
    <inputText
      v-bind:placeholder="'Quantity(kg)'"
      v-bind:label="'Quantity(kg)'"/>
    <saveButton/>
    <cancelButton/>
    <router-link to="/production/feeding/view">view feeding</router-link>
  </div>
</template>
<script>
import dateDate from '@/components/forms/dateDate.vue';
import inputText from '@/components/forms/inputText.vue';
import saveButton from '@/components/forms/saveButton.vue';
import cancelButton from '@/components/forms/cancelButton.vue';

export default {
  components:
  dateDate,
  inputText,
  saveButton,
  cancelButton,
};
</script>
