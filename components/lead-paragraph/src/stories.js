import React from "react";
import { storiesOf } from "@storybook/react";
import { WithDocsCustom } from "@govuk-react/storybook-components";

import LeadParagraph from ".";
import ReadMe from "../README.md";

const stories = storiesOf("Typography/LeadParagraph", module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add("Component default", () => (
  <LeadParagraph>LeadParagraph example</LeadParagraph>
));
