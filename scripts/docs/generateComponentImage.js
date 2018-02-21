/* eslint-disable no-console */

import React from "react";
import path from "path";
import generateImage from "./generateImage";

export default async function generateComponentImage(file, Component) {
  console.log(`generating image for ${file}`);
  await generateImage(React.createElement(Component), {
    image: {
      path: path.resolve(file, "../image.png")
    }
  });
  console.log(`generating done`);
}
