import generatePropType from "./generatePropType";
import generatePropDefaultValue from "./generatePropDefaultValue";

export default function generateProp(propName, prop) {
  return (
    `### \`${propName}\`${prop.required ? " (required)" : ""}\n` +
    `\n${prop.description ? `${prop.description}\n\n` : ""}${
      prop.type ? generatePropType(prop.type) : ""
    }${prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : ""}\n`
  );
}
