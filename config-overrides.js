/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = rewireStyledComponents(config, env);
  return config;
};
