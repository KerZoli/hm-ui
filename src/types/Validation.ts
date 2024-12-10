import type { ValidationRuleWithParams } from '@vuelidate/core';

type ValidationRule = Record<string, ValidationRuleWithParams<any, any>>;

export type ValidationSchema<T> = Record<string, ValidationRule>;
