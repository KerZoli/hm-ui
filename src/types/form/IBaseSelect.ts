type OptionValue = string | number

export interface SelectOption {
  value: string | number
  label: OptionValue
}

export interface IBaseSelect {
  id: string
  name: string
  placeholder: string
  options: SelectOption[]
  label?: string
}
