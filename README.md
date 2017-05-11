graphql-iso-enums
=================

Some GraphQL Enum Types to wrap some ISO Codes.

## Installation

```shell
$ npm install --save graphql-iso-enums
```

## Usage

Here are the currently available types:

```js
import { ISOUSState, ISOTerritory } from 'graphql-iso-enums'
```

Or, if you only want to load an individual type:

```js
// get the GraphQL Enum Type
import { ISOTerritory } from 'graphql-iso-enums/types/ISOTerritory'

// get an array of the codes
import { CODES as territoryCodes } from 'graphql-iso-enums/types/ISOTerritory'
```

