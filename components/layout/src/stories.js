import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Layout from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Layout/', module);
const examples = storiesOf('Layout/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Fragment>
    <GridRow>
      <GridCol hideContent columFull>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Fragment>
));

examples.add('Example layout', () => (
  <Fragment>
    <GridRow>
      <GridCol columFull>
        <h2>full column</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol columnTwoThirds>
        <h2>Two thirds</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol columnOneThird>
        <h2>One third</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol columnOneThird>
        <h2>One third</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol columnOneThird>
        <h2>One third</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
      <GridCol columnOneThird>
        <h2>One third</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol columnOneHalf>
        <h2>One Half</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol columnOneHalf>
        <h2>One Half</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol columnOneHalf>
        <h2>One Half</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
      <GridCol columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
      <GridCol columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
      <GridCol columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
    </GridRow>
  </Fragment>
));
