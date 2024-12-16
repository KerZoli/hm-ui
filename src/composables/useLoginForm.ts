import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { email, helpers, required } from '@vuelidate/validators';
import type { ILoginForm } from '@/types/form/ILoginForm';

export function useLoginForm() {
  const form = reactive<ILoginForm>({
    username: '',
    password: ''
  });

  const rules = {
    username: {
      required: helpers.withMessage('Username is required.', required)
    },
    password: {
      required: helpers.withMessage('Password is required.', required)
    }
  };

  const v$ = useVuelidate(rules, form);

  const validateForm = async () => {
    const isFormValid = await v$.value.$validate();

    return isFormValid;
  };

  return {
    form,
    v$,
    validateForm
  };
}
