<template>
  <div>
    <h2>Create Purchase</h2>
    <dateDate v-bind:placeholder="'dd/mm/yy'" />
    <inputText v-bind:placeholder="'Stock ID'" v-bind:label="'Stock ID'" />
    <inputText v-bind:placeolder="'Stock Type'" />
    <inputText v-bind:placeolder="'Quantity'" />
    <inputText v-bind:placeolder="'Source'" />
    <inputText v-bind:placeolder="'Stock available Balance'" />
    <inputText v-bind:placeolder="'Stock Description'" />
    <saveButton />
    <cancelButton />
    <router-link to="/purchases/view">View Purchases</router-link>
  </div>
</template>
<script>
import dateDate from '@/components/forms/dateDate.vue';
import inputText from '@/components/forms/inputText.vue';
import saveButton from '@/components/forms/saveButton.vue';
import cancelButton from '@/components/forms/cancelButton.vue';

export default {
  components: dateDate,
  inputText,
  saveButton,
  cancelButton,
};
</script>
