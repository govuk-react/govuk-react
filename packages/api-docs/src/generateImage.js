import { renderToString } from 'react-dom/server'
import { renderStylesToString } from 'emotion-server'

import { generateImage as gi } from 'component-image';

const renderEmotion = (component) => {
  const { html, css } = renderStylesToString(() => renderToString(component));
  return `
    <style>${css}</style>
    ${html}
  `;
};

const generateImage = (component, config) =>
  gi(
    component,
    Object.assign(
      {
        renderer: renderEmotion,
      },
      config,
    ),
  );

export default generateImage;
