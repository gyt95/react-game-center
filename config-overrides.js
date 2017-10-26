// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
// }
const rewired = require('react-app-rewired');
const rewireMobX = require('react-app-rewire-mobx');

/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireMobX(config, env);

    const cssLoader = rewired.getLoader(
        config.module.rules,
        rule => rule.test && String(rule.test) === String(/\.css$/)
    );

    const sassLoader = {
        test: /\.scss$/,
        use: [...(cssLoader.loader || cssLoader.use), 'sass-loader']
    };

    const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf;
    oneOf.unshift(sassLoader);
    
    return config;
}