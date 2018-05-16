import generateDescription from './generateDescription';
import generateTitle from './generateTitle';
import generateProps from './generateProps';

export default function generateMarkdown(name, folderName, reactAPI) {
  const markdownString = `${generateTitle(name)}
### Import
\`\`\`js
  import ${name} from '@govuk-react/${folderName}';
\`\`\`
<!-- STORY -->
${generateDescription(reactAPI.description)}
### Properties
${generateProps(reactAPI.props)}
`;
  return markdownString;
}
