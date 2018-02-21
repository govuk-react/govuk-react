import generateDescription from "./generateDescription";
import generateTitle from "./generateTitle";
import generateProps from "./generateProps";

export default function generateMarkdown(name, reactAPI) {
  const markdownString = `${generateTitle(name)}\n${generateDescription(
    reactAPI.description
  )}\n${generateProps(reactAPI.props)}`;

  return markdownString;
}
