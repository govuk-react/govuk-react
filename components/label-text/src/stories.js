import React from "react";
import { storiesOf } from "@storybook/react";
import { WithDocsCustom } from "@govuk-react/storybook-components";

import LabelText from ".";
import ReadMe from "../README.md";

const stories = storiesOf("Form/LabelText", module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add("Component default", () => <LabelText>Example</LabelText>);
