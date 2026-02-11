import { Controller, useFormContext } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'

interface Props {
  name: string
  label: string
  placeholder?: string
  type?: string
}

export default function TextField({
  name,
  label,
  placeholder,
  type = 'text',
}: Props) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
          <Input
            {...field}
            placeholder={placeholder}
            id={field.name}
            type={type}
            aria-invalid={fieldState.invalid}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}
