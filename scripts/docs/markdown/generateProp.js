import generatePropType from "./generatePropType";
import generatePropDefaultValue from "./generatePropDefaultValue";

export default function generateProp(propName, prop) {
  return ` \`${propName}\` | ${prop.required ? "true" : ""} | ${
    prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : "N/A"
  } | ${prop.type ? generatePropType(prop.type) : ""} | ${
    prop.description ? `${prop.description}` : ""
  }`;
}
