module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: "@env",
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false
      }],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            assets: './assets',
            constants: './src/utils/constants'
          },
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json']
        }
      ],
      '@babel/plugin-proposal-export-namespace-from',
      [
        'react-native-reanimated/plugin', {
          relativeSourceLocation: true,
        },
      ]
    ]
  }
}