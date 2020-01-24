<template>
  <div>
    <h2>Mortality</h2>
    <dateDate
      v-bind:label ="'dd/mm/yy'"/>
    <inputText
      v-bind:label ="'Quantity Remaining'"/>
    <inputText
      v-bind:label ="'Mortality Quantity'"/>
    <inputText
      v-bind:label ="'Current Quantity in pond'"/>
      <!-- dropdown of pond number -->
    <textarea
    v-bind:placeholder ="'Remarks'"/>
    <saveButton/>
    <cancelButton/>
    <router-link to="/production/mortality">Mortality</router-link>
  </div>
</template>
<script>
import textarea from '@/components/forms/textarea.vue';
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
  textarea,
};
</script>
