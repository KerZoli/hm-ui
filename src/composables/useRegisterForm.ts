import { validationMessages } from '@/utils/validationMessages';
import { email, helpers, required, sameAs } from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import { useValidation } from './useValidation';
import type { IRegisterForm } from '@/types/form/IRegisterForm';

export function userRegisterForm() {
  const form = reactive<IRegisterForm>({
    username: '',
    password: '',
    password_confirmation: '',
    email: '',
    address: '',
    date_of_birth: '',
    phone: '',
    bio: '',
    profile_picture: null
  });

  const rules = computed(() => ({
    username: {
      required: helpers.withMessage(validationMessages.required('Username'), required)
    },
    password: {
      required: helpers.withMessage(validationMessages.required('Password'), required)
    },
    password_confirmation: {
      required: helpers.withMessage(validationMessages.required('Confirm password'), required),
      sameAsPassword: sameAs(form.password)
    },
    email: {
      required: helpers.withMessage(validationMessages.required('Email'), required),
      email: helpers.withMessage(validationMessages.email('Email'), email)
    },
    date_of_birth: {
      required: helpers.withMessage(validationMessages.required('Date of birth'), required)
    },
    phone: {
      required: helpers.withMessage(validationMessages.required('Phone'), required)
    }
  }));

  const { v$, validateForm } = useValidation(rules, form);

  return {
    form,
    v$,
    validateForm
  };
}
