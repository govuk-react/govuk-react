export default function generateDescription(description, imagePath) {
  return `${imagePath ? `![Component Image](${imagePath})` : ''}
${description}\n`;
}
