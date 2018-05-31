import generateProp from './generateProp';

export default function generateProps(props) {
  if (!props) {
    return '';
  }

  return (
    '### Properties\n' +
    'Prop | Required | Default | Type | Description\n' +
    ':--- | :------- | :------ | :--- | :----------\n' +
    `${props &&
      Object.keys(props)
        .sort()
        .map(propName => generateProp(propName, props[propName]))
        .join('\n')}\n\n`
  );
}
