import type { ErrorObject } from '@vuelidate/core'

type InputType = 'text' | 'password'

export interface IBaseInput {
  id: string
  name: string
  type: InputType
  errors?: ErrorObject[]
}
