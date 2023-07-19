# Tensfer SDK

TensferJs is a safe and secure web drop-in module and this library provides a front-end web for account, authentication, balance and transaction retrieval across multiple CEX/DEX.

## Try the demo

Checkout the [widget flow](https://tensfer.co) to view how the Tensfer Widget works. _Click "See How it Works"_

## Getting your keys.

Before you can use any Tensfer SDK, you'd need a tensfer account, head on to [Tensfer Dashboard](https://app.tensfer.co) and create your account.

## Installation

You can install Tensfer in your web application using npm or yarn.

### using npm:

```js
npm install '@tensferhq/tensfer-js'
```

### using yarn:

```js
yarn add '@tensferhq/tensfer-js'
```

### using CDN:

```js
https://unpkg.com/@tensferhq/tensfer-js@2.0.1
```

## Usage

For JS frameworks import it and use

```ts
import Tensfer from "@tensferhq/tensfer-js";

Tensfer.linkWithOptions({
  companyName: "", //Your company name
  publicKey: "", //Your public key from the Tensfer dashboard,
  products: ["auth", "balance", "transactions"],
  onSuccess: function (data) {
    console.log("Success!", data);
  },
  onError: function (data) {
    // an error occured
    console.log("Error!", data);
  },
  onClose: function () {
    // user closed widget
    console.log("user closed widget");
  },
});
```
