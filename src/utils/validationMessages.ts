export const validationMessages = {
  required: (field: string) => `${field} is required.`,
  email: (field: string) => `${field} is invalid.`,
  sameAsPassword: 'Passwords must match.'
};
