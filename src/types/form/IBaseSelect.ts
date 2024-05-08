import type { ErrorObject } from '@vuelidate/core'

type OptionValue = string | number

export interface SelectOption {
  value: string | number
  label: OptionValue
}

export interface IBaseSelect {
  placeholder: string
  options: SelectOption[]
  label?: string
  optional?: boolean
  errors?: ErrorObject[]
  displayErrors: boolean
}
