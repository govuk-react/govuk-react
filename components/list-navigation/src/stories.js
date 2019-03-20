import React from "react";
import { storiesOf } from "@storybook/react";
import { WithDocsCustom } from "@govuk-react/storybook-components";
import Link from "@govuk-react/link";

import ListNavigation from ".";
import ReadMe from "../README.md";

const stories = storiesOf("Navigation/ListNavigation", module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add("Component default", () => (
  <ListNavigation listStyleType="square">
    <Link href="https://example.com/?=1">lorem dolor set cetra</Link>
    <Link href="https://example.com/?=2">Meta logi arche decip con</Link>
    <Link href="https://example.com/?=2">Ignis prevo don coldo</Link>
  </ListNavigation>
));
