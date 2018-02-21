import stringOfLength from "../stringOfLength";

export default function generateTitle(name) {
  const title = `\`${name}\` (component)`;
  return `${title}\n${stringOfLength("=", title.length)}\n`;
}
