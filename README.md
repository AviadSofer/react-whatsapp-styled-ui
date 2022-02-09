# react-whatsapp-styled-ui
A Whatsapp chat screenshot design, build with React, TS, CSS.

## Installation

    npm i react-whatsapp-styled-ui

## Usage

```typescript
import React from 'react';
import WhatsappUi from './lib/components/WhatsappUi';

function App() {
  return (
    <div>
      <WhatsappUi message={'Hi!'} size={70} phoneNumber={'9765555555555'}/>
    </div>
  )
}

export default App

```
## Demo

You can see the Demo of the component [here](https://react-whatsapp-chat-design.vercel.app).

## Configuring

The `generate` and `generateSync` functions take an optional second parameter containing configuration options for the image. All configuraion parameters are optional.

> Note that the supplied configuration values are **not validated**. Invalid values may lead to unexpected results or the image not getting generated at all. For color value validations, consider using a library like [validate-color](https://github.com/dreamyguy/validate-color) before passing the value to this library.

The available options are as follows.

| Name          | Type                                      | Default value | Description                                                                                                                                                                                                                              |
| ------------- | ----------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bgColor       | string \| Canvas.                         | #FFFFFF       | Sets the background color of the image. See [CanvasRenderingContext2D.fillStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) for valid values, or use a color value validator (see note above). |
| customHeight  | number                                    | 0             | Sets the height of the generated image in pixels. If falsy, will automatically calculate the height based on the amount of text.                                                                                                         |
| debug         | boolean                                   | false         | Set to true to turn on debug mode (see below).                                                                                                                                                                                           |
| debugFilename | string                                    | timestamp     | Set a custom file name (may include a custom path) for the file created in debug mode. Defaults to a timestamp with a `.png` extension in the current working directory.                                                                 |
| fontFamily    | string                                    | Helvetica     | The font family to use                                                                                                                                                          |

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
