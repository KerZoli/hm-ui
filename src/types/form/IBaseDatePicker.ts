import type { ErrorObject } from '@vuelidate/core';

export interface IBaseDatePicker {
  label?: string;
  optional?: boolean;
  errors?: ErrorObject[];
}
