<template>
  <div class="bg-white w-12/12 p-5">
    <form @submit.prevent="save" action="">
      <inputText
        :placeholder="'Customer name'"
        :label="'Customer name'"
        :id="'cn'"
        v-model="saleData.customerName"/>
      <dropdown
        :label="'Fish type'"
        v-model="saleData.fishType"/>
      <inputText
        :label="'Tanks'"
        v-model="saleData.tank"/>
      <inputText
        :label="'Weight (kg)'"
        v-model="saleData.weight"/>
      <inputText
        :label="'Quantity'"
        v-model="saleData.quantity"/>
      <inputText
        :label="'Unit Price (#)'"
        v-model="saleData.unitPrice"/>
      <saveButton
        :value="'Save'"
        :loading="loading"/>
    </form>
    total: {{ this.saleData.quantity * this.saleData.unitPrice }}
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
    dropdown,
    saveButton,
  },
  data() {
    return {
      loading: false,
      saleData: {
        customerName: '',
        fishType: '',
        tank: '',
        weight: '',
        quantity: '',
        unitPrice: '',
      },
    };
  },
  methods: {
    save() {
      this.loading = true;
    },
  },
};
</script>
