import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { email, helpers, required } from '@vuelidate/validators';
import type { ILoginForm } from '@/types/form/ILoginForm';

export function useLoginForm() {
  const form = reactive<ILoginForm>({
    email: '',
    password: ''
  });

  const rules = {
    email: {
      required: helpers.withMessage('Email is required.', required),
      email: helpers.withMessage('Invalid email.', email)
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
