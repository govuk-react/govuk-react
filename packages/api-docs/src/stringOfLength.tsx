export default function stringOfLength(string, length) {
  let newString = '';
  for (let i = 0; i < length; i += 1) {
    newString += string;
  }
  return newString;
}
