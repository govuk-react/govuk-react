import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from ".";
import GridRow from "../GridRow";
import GridCol from "../GridCol";

storiesOf("Layout", module).add("Column Full", () => (
  <Layout>
    <GridRow>
      <GridCol columFull>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf("Layout", module).add("Column Halves", () => (
  <Layout>
    <GridRow>
      <GridCol columnOneHalf>
        <p>content</p>
      </GridCol>
      <GridCol columnOneHalf>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf("Layout", module).add("Column Thirds", () => (
  <Layout>
    <GridRow>
      <GridCol columnOneThird>
        <p>content</p>
      </GridCol>
      <GridCol columnOneThird>
        <p>content</p>
      </GridCol>
      <GridCol columnOneThird>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf("Layout", module).add("Column Two Thirds / One Third", () => (
  <Layout>
    <GridRow>
      <GridCol columnTwoThirds>
        <p>content</p>
      </GridCol>
      <GridCol columnOneThird>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf("Layout", module).add("Column One Third / Two Thirds", () => (
  <Layout>
    <GridRow>
      <GridCol columnOneThird>
        <p>content</p>
      </GridCol>
      <GridCol columnTwoThirds>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf("Layout", module).add("Quarters", () => (
  <Layout>
    <GridRow>
      <GridCol columnOneQuarter>
        <p>content</p>
      </GridCol>
      <GridCol columnOneQuarter>
        <p>content</p>
      </GridCol>
      <GridCol columnOneQuarter>
        <p>content</p>
      </GridCol>
      <GridCol columnOneQuarter>
        <p>content</p>
      </GridCol>
    </GridRow>
  </Layout>
));

storiesOf("Layout", module).add("Example layout", () => (
  <Layout>
    <GridRow>
      <GridCol showContent columFull>
        <h2>full column</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol showContent columnTwoThirds>
        <h2>Two thirds</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol showContent columnOneThird>
        <h2>One third</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol showContent columnOneThird>
        <h2>One third</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol showContent columnOneThird>
        <h2>One third</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
      <GridCol showContent columnOneThird>
        <h2>One third</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol showContent columnOneHalf>
        <h2>One Half</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol showContent columnOneHalf>
        <h2>One Half</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol showContent columnOneHalf>
        <h2>One Half</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol showContent columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
      <GridCol showContent columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol showContent columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data.
        </p>
      </GridCol>
      <GridCol showContent columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
      <GridCol showContent columnOneQuarter>
        <h2>One quarter</h2>
        <p>
          This guide shows how to make your service look consistent with the
          rest of GOV.UK. It includes example code and guidance for layout,
          typography, colour, images, icons, forms, buttons and data
        </p>
      </GridCol>
      <GridCol showContent columnOneQuarter>
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
