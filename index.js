const { injectBabelPlugin } = require("react-app-rewired");

function rewireRemoveTestIds(config, env, testIdsBabelOptions = {}) {
  config = injectBabelPlugin(["remove-test-ids", testIdsBabelOptions], config);
  return config;
}

function createRemoveTestIdsRewire(emotionBabelOptions) {
  return function(config, env) {
    return rewireRemoveTestIds(config, env, emotionBabelOptions);
  };
}

module.exports.rewireRemoveTestIds = rewireRemoveTestIds;
module.exports.createRemoveTestIdsRewire = createRemoveTestIdsRewire;
