# Nikita SDK for LOTR API

## Installation

npm install nikita-lotr-sdk

## Functionality

Create new instance of SDK API with LOTR API key from https://the-one-api.dev/v2 . 

API key will be used in methods where required.


## Example of using

### SDK
```
import { LotrSDK } from 'nikita-lotr-sdk';

const lotrSDK = new LotrSDK(token);

client.getBooks().then((res)  => res)
.catch((err) => err.message)

client.getBook(bookId).then((res)  => res)
```


### Client
```
import { LotrClient } from 'nikita-lotr-sdk';

LotrClient(token).getBook().then((res)  => res)
```