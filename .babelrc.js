// https://babeljs.io/docs/usage/api/
module.exports = {
  // plugins: [["resolver", {"resolveDirs": ["./src"]}]],
  "plugins": [
    ["module-resolver", {
      // "root": ["./src"],
      "root": ["./"],
      // "alias": {
      //   "test": "./test",
      //   "underscore": "lodash"
      // }
    }]
  ],


  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],

    ['@babel/preset-stage-2', { decoratorsLegacy: true }],

    // '@babel/preset-stage-2',
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  ignore: [
    'node_modules',
    'build'
  ],
}
