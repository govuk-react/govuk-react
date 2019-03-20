import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { WithDocsCustom } from "@govuk-react/storybook-components";

import ErrorSummary from "./fixtures";
import ReadMe from "../README.md";

const stories = storiesOf("Form/ErrorSummary", module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add("Component default", () => <ErrorSummary />);
