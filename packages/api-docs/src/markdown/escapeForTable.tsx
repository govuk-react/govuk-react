export default function escapeForTable(text: string) {
  return text.replace(/\|/g, '\\|');
}
