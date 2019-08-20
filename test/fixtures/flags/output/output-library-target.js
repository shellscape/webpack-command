const { resolve } = require('path');

const config = require('../../common/webpack.config');

module.exports = {
  arguments: ['--output-library-target', 'var'],

  config: Object.assign({}, config, {
    entry: resolve(__dirname, './output-entry.js')
  }),

  group: 'output'
};
