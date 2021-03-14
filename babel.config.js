module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry',
        modules: false,
        shippedProposals: true
      }
    ],
    '@babel/preset-react'
  ]
};
