<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';

import BaseSelect from './BaseSelect.vue';
import ErrorMsg from './ErrorMsg.vue';
import type { SelectOption } from '@/types/form/IBaseSelect';
import type { IBaseDatePicker } from '@/types/form/IBaseDatePicker';
import { getMonths, getYears } from '@/config/datepicker';
import FormElementWrapper from './FormElementWrapper.vue';
import FormElementLabel from './FormElementLabel.vue';

const model = defineModel<string>();
const years = getYears();
const months = getMonths();

const year = ref<number | null>(null);
const month = ref<number | null>(null);
const day = ref<number | null>(null);

const days = computed<SelectOption[]>(() => {
  if (!year.value || !month.value) {
    return [];
  }
  const currentMonthDays = new Date(year.value, month.value, 0).getDate();

  return Array.from(
    {
      length: currentMonthDays
    },
    (v, i) => i + 1
  ).map((day) => ({ label: day, value: day }));
});

watchEffect(() => {
  if (!year.value || !month.value || !day.value) {
    return;
  }
  model.value = `${year.value}-${month.value.toString().padStart(2, '0')}-${day.value}`;
});

defineProps<IBaseDatePicker>();
</script>
<template>
  <FormElementWrapper>
    <FormElementLabel :id="String($attrs.id)" :label="label" :optional="optional" v-if="label" />
    <div class="date-picker">
      <BaseSelect
        v-model="year"
        id="year"
        name="year"
        placeholder="Year"
        :options="years"
        :errors="errors"
        :display-errors="false"
      />
      <BaseSelect
        v-model="month"
        id="month"
        name="month"
        placeholder="Month"
        :options="months"
        :errors="errors"
        :display-errors="false"
      />
      <BaseSelect
        v-model="day"
        id="day"
        name="day"
        placeholder="Day"
        :options="days"
        :errors="errors"
        :display-errors="false"
      />
    </div>
    <ErrorMsg :errors="errors" />
  </FormElementWrapper>
</template>
<style scoped lang="scss">
.date-picker {
  display: flex;
  gap: 10px;
}
</style>
