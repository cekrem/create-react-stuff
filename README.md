# create-react-stuff
Highly opinionated code generator for React components and containers. Needs no local install.

## Usage
### With yarn
`yarn create react-stuff component|container [optionalSubDir/with/unlimited/levels]`
### With npx
`npx create-react-stuff component|container [optionalSubDir/with/unlimited/levels]`

## Custom templates
This module has built in templates in the following format:
```jsx
import React from 'react';

const REPLACE = props => <div>Hello!</div>;

REPLACE.propTypes = {};

export default REPLACE;
```
Where `REPLACE` will be replaced by supplied component / container name. Custom templates can be placed in `./src/[component|container]/_template.js`. Components also have a `_template.test.js` template, while containers (for now) don't.

## Future versions
...Might be able to create actions, thunks and reducers. Maybe.
