import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from '.';
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

storiesOf('Layout', module).add('Column Full', () => (
  <Layout>
    <GridRow>
      <GridCol hideContent columFull>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf('Layout', module).add('Column Halves', () => (
  <Layout>
    <GridRow>
      <GridCol hideContent columnOneHalf>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneHalf>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf('Layout', module).add('Column Thirds', () => (
  <Layout>
    <GridRow>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf('Layout', module).add('Column Two Thirds / One Third', () => (
  <Layout>
    <GridRow>
      <GridCol hideContent columnTwoThirds>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf('Layout', module).add('Column One Third / Two Thirds', () => (
  <Layout>
    <GridRow>
      <GridCol hideContent columnOneThird>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnTwoThirds>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf('Layout', module).add('Quarters', () => (
  <Layout>
    <GridRow>
      <GridCol hideContent columnOneQuarter>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneQuarter>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneQuarter>
        <p>content</p>
      </GridCol>
      <GridCol hideContent columnOneQuarter>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf('Layout', module).add('Example layout', () => (
  <Layout>
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
  </Layout>
));
