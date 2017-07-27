GraphQL ISO Enums
=================

### Some GraphQL Enum Types to wrap some ISO Codes.

## Installation

```shell
$ npm install graphql-iso-enums
```

## Usage

Here are the currently available types:

```js
import {
  ISOUSState,
  ISOTerritory,
  ISOLanguage,
  ISOCurrency
} from 'graphql-iso-enums'

// then use them in your GraphQL schema
const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    spokenLanguages: {
      type: new GraphQLList(ISOLanguage),
      resolve: () => { /* ... */ }
    }
  }
})
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

## Contributing

Got some other ISO code in *your* GraphQL API? Fork, modify, and put in a pull request! With your help, we can assemble one module that becomes the go-to for ISO codes in GraphQL!
