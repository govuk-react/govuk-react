import stringOfLength from "../stringOfLength";
import generateProp from "./generateProp";

export default function generateProps(props) {
  if (!props) {
    return "";
  }

  const title = "Props";

  return (
    `${title}\n${stringOfLength("-", title.length)}\n` +
    `Prop Name | Required | Default | Type | Description \n` +
    `:-------- | :------- | :------ | :--- | :---------- \n` +
    `${props &&
      Object.keys(props)
        .sort()
        .map(propName => generateProp(propName, props[propName]))
        .join("\n")}\n\n`
  );
}
