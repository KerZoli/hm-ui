<script setup lang="ts">
import { computed, ref } from 'vue'

import { YEARS_TO_DISPLAY, type IBaseDatePickerProps } from '@/types/form/IBaseDatePicker'
import BaseSelect from './BaseSelect.vue'
import type { SelectOption } from '@/types/form/IBaseSelect'

const currentYear = new Date().getFullYear()
const years: SelectOption[] = Array.from(
  { length: YEARS_TO_DISPLAY },
  (v, i) => currentYear - YEARS_TO_DISPLAY + i + 1
).map((year) => ({ label: year, value: year }))

const months: SelectOption[] = [...Array(11).keys()].map((key) => ({
  label: new Date(0, key).toLocaleString('en', { month: 'long' }),
  value: key + 1
}))

const year = ref<number | null>(null)
const month = ref<number | null>(null)
const day = ref<number | null>(null)

const days = computed<SelectOption[]>(() => {
  if (!year.value || !month.value) {
    return []
  }
  const currentMonthDays = new Date(year.value, month.value, 0).getDate()

  return Array.from(
    {
      length: currentMonthDays
    },
    (v, i) => i
  ).map((day) => ({ label: day, value: day }))
})

const props = defineProps<IBaseDatePickerProps>()
</script>
<template>
  <div class="date-picker-container">
    <label for="day">Date of Birth</label>
    <div class="date-picker">
      <BaseSelect v-model="day" id="day" name="day" placeholder="Day" :options="days" />
      <BaseSelect v-model="month" id="month" name="month" placeholder="Month" :options="months" />
      <BaseSelect v-model="year" id="year" name="year" placeholder="Year" :options="years" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.date-picker-container {
  display: flex;
  flex-direction: column;

  .date-picker {
    margin-top: 10px;
    display: flex;
    gap: 10px;
  }
}
</style>
