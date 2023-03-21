module.exports = function (api) {
  //api.cache(true);
  const isWeb = api.caller(isTargetWeb);

  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: "@env",
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false
      }],
      ["inline-dotenv", {
        path: '.env',
        systemVar: "overwrite" // See motdotla/dotenv for more options
      }],
      ["react-native-reanimated/plugin", {
        "relativeSourceLocation": true
      }], [
        'module-resolver',
        {
          alias: {
            'react-native-reanimated': '../src/index',
            react: './node_modules/react',
            'react-native': './node_modules/react-native',
            '@babel': './node_modules/@babel',
            'lodash.isequal': './node_modules/lodash.isequal',
            'hoist-non-react-statics':
              './node_modules/hoist-non-react-statics',
            invariant: './node_modules/invariant',
            'prop-types': './node_modules/prop-types',
          },
        },
      ]
    ],

  };
};

function isTargetWeb(caller) {
  return caller && caller.name === 'babel-loader';
}