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
import {
  ISOUSState,
  ISOTerritory,
  ISOLanguage
} from 'graphql-iso-enums'
```

Or, if you only want to load an individual type:

```js
// get the GraphQL Enum Type
import { ISOTerritory } from 'graphql-iso-enums/types/ISOTerritory'

// get a plain object of the codes
import { CODES as territoryCodes } from 'graphql-iso-enums/types/ISOTerritory'
```

After adding the types to your schema, get the enum values (and human-readable forms) using an introspection query in GraphQL

```graphql
query getLanguages {
  __type(name: "ISO639_1") {
    enumValues {
      name
      description
    }
  }
}
```

**Note:** The GraphQL type names are different than the exported property names.

