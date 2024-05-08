import type { ErrorObject } from '@vuelidate/core'

export interface IBaseTextArea {
  label?: string
  optional?: boolean
  errors?: ErrorObject[]
}
