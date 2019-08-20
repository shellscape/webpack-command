const { resolve } = require('path');

const config = require('../../common/webpack.config');

module.exports = {
  arguments: ['--watch-aggregate-timeout', 400],

  config: Object.assign({}, config, {
    entry: resolve(__dirname, '../../common/entry-a.js')
  }),

  group: 'advanced'
};
