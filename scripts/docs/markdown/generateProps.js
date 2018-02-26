import stringOfLength from "../stringOfLength";
import generateProp from "./generateProp";

export default function generateProps(props) {
  const title = "Props";

  if (!props) {
    return "";
  }

  return (
    `${title}\n${stringOfLength("-", title.length)}\n` +
    `\n${props &&
      Object.keys(props)
        .sort()
        .map(propName => generateProp(propName, props[propName]))
        .join("\n")}`
  );
}
