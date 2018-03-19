import generateDescription from "./generateDescription";
import generateTitle from "./generateTitle";
import generateProps from "./generateProps";

export default function generateMarkdown(name, reactAPI, imagePath) {
  const markdownString = `${generateTitle(name)}\n${generateDescription(
    reactAPI.description,
    imagePath
  )}\n${generateProps(reactAPI.props)}\n`;

  return markdownString;
}
