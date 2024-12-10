import type { ValidationSchema } from '@/types/Validation';
import useVuelidate, { type ValidationRuleWithParams } from '@vuelidate/core';
import type { ComputedRef } from 'vue';

export function useValidation<T extends Record<string, any>>(
  rules: ComputedRef<ValidationSchema<T>>,
  form: T
) {
  const v$ = useVuelidate(rules, form);

  const validateForm = async () => {
    const isFormValid = await v$.value.$validate();

    return isFormValid;
  };

  return {
    v$,
    validateForm
  };
}
