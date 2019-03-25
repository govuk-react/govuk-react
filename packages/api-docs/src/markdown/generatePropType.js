export default function generatePropType(type) {
  let values;
  if (Array.isArray(type.value)) {
    values = `(${type.value.map(typeValue => typeValue.name || typeValue.value).join(' \\| ')})`;
  } else {
    values = type.value;
  }

  return `${type.name}${values || ''}`;
}
