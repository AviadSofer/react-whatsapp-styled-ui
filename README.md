# react-whatsapp-styled-ui
A Whatsapp chat screenshot design, build with React, TS, CSS

You can see the Demo of the component [here](https://react-whatsapp-chat-design.vercel.app)

## Installation

    npm i react-whatsapp-styled-ui

## Usage

```typescript
const textToImage = require('text-to-image');

// using the asynchronous API with await
const dataUri = await textToImage.generate('Lorem ipsum dolor sit amet');

// using the asynchronous API with .then
textToImage.generate('Lorem ipsum dolor sit amet').then(function (dataUri) {
  // use the dataUri
});

// using the synchronous API
const dataUri = textToImage.generateSync('Lorem ipsum dolor sit amet');
```

## Configuring

The `generate` and `generateSync` functions take an optional second parameter containing configuration options for the image. All configuraion parameters are optional.

> Note that the supplied configuration values are **not validated**. Invalid values may lead to unexpected results or the image not getting generated at all. For color value validations, consider using a library like [validate-color](https://github.com/dreamyguy/validate-color) before passing the value to this library.

The available options are as follows.

| Name          | Type                                      | Default value | Description                                                                                                                                                                                                                              |
| ------------- | ----------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bgColor       | string \| CanvasGradient \| CanvasPattern | #FFFFFF       | Sets the background color of the image. See [CanvasRenderingContext2D.fillStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) for valid values, or use a color value validator (see note above). |
| customHeight  | number                                    | 0             | Sets the height of the generated image in pixels. If falsy, will automatically calculate the height based on the amount of text.                                                                                                         |
| debug         | boolean                                   | false         | Set to true to turn on debug mode (see below).                                                                                                                                                                                           |
| debugFilename | string                                    | timestamp     | Set a custom file name (may include a custom path) for the file created in debug mode. Defaults to a timestamp with a `.png` extension in the current working directory.                                                                 |
| fontFamily    | string                                    | Helvetica     | The font family to use for the text in the image. See [CSS font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) for valid values.                                                                                  |
| fontPath      | string                                    |               | The file system path to a font file to use, also specify `fontFamily` if you use this.                                                                                                                                                   |
| fontSize      | number                                    | 18            | The font size to use for the text in the image. See [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) for valid values.                                                                                        |
| fontWeight    | string \| number                          | normal        | The font weight to use for the text in the image. See [CSS font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) for valid values.                                                                                  |
| lineHeight    | number                                    | 28            | The line height for the generated text.                                                                                                                                                                                                  |
| margin        | number                                    | 10            | The margin (all sides) between the text and the border of the image.                                                                                                                                                                     |
| maxWidth      | number                                    | 400           | Sets the width of the generated image in pixels.                                                                                                                                                                                         |
| textAlign     | string                                    | left          | The text alignment for the generated text. See [CanvasRenderingContext2D.textAlign](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign) for valid values.                                               |
| textColor     | string                                    | #000000       | Sets the text color. See [CanvasRenderingContext2D.fillStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) for valid values, or use a color value validator (see note above).                    |
| verticalAlign | string                                    | top           | Use to set center height with `customHeight` (possible values: `top`, `center`).                                                                                                                                                         |

Example:

```typescript
const textToImage = require('text-to-image');

const dataUri = await textToImage.generate('Lorem ipsum dolor sit amet', {
  debug: true,
  maxWidth: 720,
  fontSize: 18,
  fontFamily: 'Arial',
  lineHeight: 30,
  margin: 5,
  bgColor: 'blue',
  textColor: 'red',
});
```

## Contributing

Pull requests are welcome. See the [Issues](./CONTRIBUTING.md) of this project.

## License

[ISC License (ISC)](./LICENSE)
