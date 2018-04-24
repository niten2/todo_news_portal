module.exports = {
  plugins: [
    ["module-resolver", { "root": ["./"], }]
  ],

  presets: [
    [ '@babel/preset-env', { targets: { node: 'current', } } ],
    ['@babel/preset-stage-2', { decoratorsLegacy: true }],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],

  ignore: [
    'node_modules',
    'build'
  ],
}
