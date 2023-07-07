# Tensfer SDK

JS library for implementing the Tensfer widget - TensferJs is a safe and secure web drop-in module and this library provides a front-end web for account, authentication, balance and transaction across multiple CEX/DEX.. 

## Try the demo
Checkout the [widget flow](https://tensfer.co) to view how the Tensfer Widget works. *Click "See How it Works"*

## Getting your keys.
Before you can use any Tensfer SDK, you'd need a tensfer account, head on to [Tensfer Dashboard](https://app.tensfer.co) and create your account. 
## Installation
You can install Tensfer in your web application using npm or yarn.

using npm:`npm install tensfer-js`

using yarn: `yarn add tensfer-js`

## Usage

For JS frameworks import it and use

```ts
import Tensfer from 'tensfer-js

const tensfer = new Tensfer();

      const openWidget = () => {
        tensfer.newTransaction({
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
          onClose: function (data) {
            // user closed widget
            console.log("Exited!", data);
          },
        });
      };

```
