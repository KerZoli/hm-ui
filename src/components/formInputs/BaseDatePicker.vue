<script setup lang="ts">
import { computed, ref } from 'vue'

import BaseSelect from './BaseSelect.vue'
import type { SelectOption } from '@/types/form/IBaseSelect'
import type { IBaseDatePicker } from '@/types/form/IBaseDatePicker'

const YEARS_TO_DISPLAY = 120
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
const props = defineProps<IBaseDatePicker>()
const hasError = computed(() => props.errors && props.errors.length)
</script>
<template>
  <div class="date-picker-container">
    <div class="date-picker">
      <BaseSelect v-model="day" id="day" name="day" placeholder="Day" :options="days" />
      <BaseSelect v-model="month" id="month" name="month" placeholder="Month" :options="months" />
      <BaseSelect v-model="year" id="year" name="year" placeholder="Year" :options="years" />
    </div>
    <span class="error-msg"> {{ hasError ? errors![0].$message : '&nbsp;' }}</span>
  </div>
</template>
<style scoped lang="scss">
.date-picker-container {
  display: flex;
  flex-direction: column;

  .date-picker {
    display: flex;
    gap: 10px;
  }
}
</style>
