export default function generateDescription(description, imagePath = undefined) {
  return `${imagePath ? `![Component Image](${imagePath})` : ''}
${description}\n`;
}
