import generateTitle from './generateTitle';
import generateImportText from './generateImportText';
import generateDescription from './generateDescription';
import generateProps from './generateProps';

export default function generateMarkdown(name, folderName, reactAPI) {
  const markdownString = `${generateTitle(name)}
${generateImportText(name, folderName)}
<!-- STORY -->
${generateDescription(reactAPI.description)}
${generateProps(reactAPI.props)}
`;
  return markdownString;
}
