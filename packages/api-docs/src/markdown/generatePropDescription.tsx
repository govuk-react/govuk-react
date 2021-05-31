export default function generatePropDescription(description) {
  // Allow multi-line descriptions
  return description.replace(/\n/g, '<br/>');
}
