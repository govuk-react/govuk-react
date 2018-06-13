import generatePropType from './generatePropType';
import generatePropDefaultValue from './generatePropDefaultValue';

export default function generateProp(propName, prop) {
  const defaultValue = prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : '';
  const propType = prop.type ? generatePropType(prop.type) : '';
  const description = prop.description ? prop.description : '';
  return ` \`${propName}\` | ${prop.required ? 'true' : ''} | \`\`\`${defaultValue}\`\`\` | ${propType} | ${description}`;
}
