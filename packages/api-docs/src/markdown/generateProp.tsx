import generatePropType from './generatePropType';
import generatePropDefaultValue from './generatePropDefaultValue';
import generatePropDescription from './generatePropDescription';
import escapeForTable from './escapeForTable';

export default function generateProp(propName, prop) {
  const defaultValue = prop.defaultValue ? `\`\`\`${generatePropDefaultValue(prop.defaultValue)}\`\`\`` : '';
  const propType = prop.type ? generatePropType(prop.type) : '';
  const description = prop.description ? generatePropDescription(prop.description) : '';
  return ` \`${escapeForTable(propName)}\` | ${prop.required ? 'true' : ''} | ${defaultValue} | ${escapeForTable(
    propType
  )} | ${escapeForTable(description)}`;
}
