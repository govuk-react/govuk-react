import { generateImage as gi } from 'component-image';
import renderGlamorous from 'render-glamorous';

const generateImage = (component, config) =>
  gi(
    component,
    Object.assign(
      {
        renderer: renderGlamorous,
      },
      config,
    ),
  );

export default generateImage;
