export default function generatePropDefaultValue(value) {
  /**
   * Format default props to be on one line in order
   * to render vartypes like objects in Markdown tables
   */
  const formattedValue = value.value.replace(/\n|\r/g, ' ');
  return `${formattedValue}`;
}
