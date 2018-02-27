/* eslint-disable no-console */

import React from "react";
import Jimp from "jimp";
import chalk from "chalk";

import generateImage from "./generateImage";

export default async function generateComponentImage(
  file,
  Component,
  imagePath
) {
  try {
    const image = await generateImage(React.createElement(Component), {
      image: {
        omitBackground: false
      }
    });
    const jimage = await Jimp.read(image);
    jimage.autocrop(false).write(imagePath);
  } catch (e) {
    console.log(chalk.red("Error generating image:"), file, e.message);
  }
}
