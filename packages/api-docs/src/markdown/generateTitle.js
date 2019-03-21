import stringOfLength from '../stringOfLength';

export default function generateTitle(name) {
  const title = `${name}`;
  return `${title}\n${stringOfLength('=', title.length)}\n`;
}
