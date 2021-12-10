const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  {
    sassOptions: {
      prependData: '@import "~/styles/commons.scss";',
    },
  },
])
