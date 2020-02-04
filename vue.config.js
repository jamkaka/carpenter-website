const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/assets/scss/abstracts/_variables.scss";
        `
      }
    }
  },
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
        plugins: [
          imageminMozjpeg({
            quality: 60
          })
        ]
      })
    ]
  }
};
