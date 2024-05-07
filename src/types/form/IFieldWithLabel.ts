import type { ErrorObject } from '@vuelidate/core'

export interface IFieldWithLabel {
  id: string
  label: string
  optional?: boolean
  errors?: ErrorObject[]
}
