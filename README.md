# react-whatsapp-styled-ui-hebrew
A Whatsapp chat screenshot design, build with React, TS, CSS.

## Installation

    npm i react-whatsapp-styled-ui-hebrew

## Usage

```typescript
import React from 'react';
import WhatsappUi from 'react-whatsapp-styled-ui-hebrew';

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

You can see the Demo (in English version) [here](https://react-whatsapp-chat-design.vercel.app).

## Configuring
Fot the component will work fine you have to Set all this props:

| Name          | Type                                       | Description                                                                                                                                                                                                                              
| ------------- | ----------------------------------------- | -----------------------------------------------------------------------|
| message       | string                                    | Sers the message.                                                      |
| phoneNumber   | string                                    | Sets the phone number. Yuo can do it with [useState](https://reactjs.org/docs/hooks-state.html).                    |                                                                                                     |
| size          | number                                    | Sets the Size of the component in vh. the width relative to the height.|                                                                                                                                                  |

## Contributing

Pull requests are welcome. See the [Issues](./CONTRIBUTING.md) of this project.

## License

[ISC License (ISC)](./LICENSE)
