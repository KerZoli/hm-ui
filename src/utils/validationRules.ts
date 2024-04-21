import { email, helpers, required } from '@vuelidate/validators'

export const loginFormRules = {
  email: {
    required: helpers.withMessage('Username is required.', required),
    email: helpers.withMessage('Invalid email.', email)
  },
  password: {
    required: helpers.withMessage('Password is required.', required)
  }
}
