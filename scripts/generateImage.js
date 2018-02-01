import { generateImage as gi } from "component-image";
import path from "path";
import renderGlamorous from "render-glamorous";

const generateImage = (component, config) =>
  gi(component, {
    stylesheet: path.join(
      __dirname,
      "../node_modules/normalize.css/normalize.css"
    ),
    renderer: renderGlamorous,
    ...config
  });

export default generateImage;
