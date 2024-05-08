import type { ErrorObject } from '@vuelidate/core'
export interface IBaseInput {
  label?: string
  optional?: boolean
  errors?: ErrorObject[]
}
