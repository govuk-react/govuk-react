import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { WithDocsCustom } from "@govuk-react/storybook-components";

import SectionBreak from "./fixtures";
import ReadMe from "../README.md";

const stories = storiesOf("Typography/SectionBreak", module);
stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add("Component default", SectionBreak);
