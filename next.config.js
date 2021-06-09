const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const path = require('path')

module.exports = withPlugins([
  {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  },
  [
    optimizedImages,
    {
      optimizeImages: true,
      mozjpeg: {
        quality: 50,
      },
      pngquant: {
        quality: [0.3, 0.5],
      },
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      svgo: {
        options: {
          multipass: true,
          datauri: 'enc',
          js2svg: {
            indent: 2,
            pretty: true,
          },
        },
      },
      webp: {
        quality: 50,
      },
    },
  ],
])
