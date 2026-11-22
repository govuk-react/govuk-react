import type { BaseFieldMetadata } from '@conform-to/react/future';

/** The props a govuk-react `Field` needs from Conform's field metadata. */
export function fieldProps(field: BaseFieldMetadata<unknown, string[]>) {
  return {
    id: field.id,
    name: field.name,
    defaultValue: field.defaultValue,
    errorMessage: field.errors?.[0],
  };
}
