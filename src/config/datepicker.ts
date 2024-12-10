import type { SelectOption } from '@/types/form/IBaseSelect';

const YEARS_TO_DISPLAY = 120;
const currentYear = new Date().getFullYear();

export const getYears = () =>
  <SelectOption[]>(
    Array.from({ length: YEARS_TO_DISPLAY }, (v, i) => currentYear - YEARS_TO_DISPLAY + i + 1).map(
      (year) => ({ label: year, value: year })
    )
  );

export const getMonths = () => <SelectOption[]>[...Array(11).keys()].map((key) => ({
    label: new Date(0, key).toLocaleString('en', { month: 'long' }),
    value: key + 1
  }));
