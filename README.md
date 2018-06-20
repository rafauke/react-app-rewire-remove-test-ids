# react-app-rewire-remove-test-ids
Add babel-plugin-remove-test-ids babel plugin to create-react-app using react-app-rewired

Add the `babel-plugin-remove-test-ids` to `create-react-app` app via [react-app-rewired](https://github.com/timarney/react-app-rewired)

## Installation
```
yarn add --dev react-app-rewire-remove-test-ids
```
OR
```
npm install --save-dev react-app-rewire-remove-test-ids
```

## Usage
In the `config-overrides.js` you created for `react-app-rewired` add this code:

```
const { rewireRemoveTestIds } = require('react-app-rewire-remove-test-ids');

/* config-overrides.js */
module.exports = function override(config, env) {
  return rewireRemoveTestIds(config, env, { 'attributes': ['my-test-attribute', 'another-test-id'] });
}
```

If you are using `compose` utility provided by `react-app-rewired` to add multiple rewires, use this code:
```
const { compose } = require('react-app-rewired');
const { createRemoveTestIdsRewire } = require('react-app-rewire-remove-test-ids');

/* config-overrides.js */
module.exports = function override(config, env) {
  const rewires = compose(
    createRewireForSomeOtherPlugin(),
    // ... place more rewires
    createRemoveTestIdsRewire({ inline: true }),
  );
  return rewires(config, env);
};
```


## Inspirations
[react-app-rewire-styled-components](https://github.com/withspectrum/react-app-rewire-styled-components) by @mxstbr
[react-app-rewire-contrib](https://github.com/osdevisnot/react-app-rewire-contrib) by @osdevisnot

## License
Licensed under MIT License, Copyright @ 2018 Rafał Wyszomirski. See [LICENSE](LICENSE) for more details.