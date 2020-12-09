const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 3002,
    https: false,
    hotOnly: false,
  },
  chainWebpack(config) {
    config.plugins.delete("prefetch")
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
    compression: {
      brotli: {
        filename: "[path].br[query]",
        algorithm: "brotliCompress",
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        compressionOptions: {
          level: 11,
        },
        minRatio: 0.8,
      },
      gzip: {
        filename: "[path].gz[query]",
        algorithm: "gzip",
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      },
    },
  },
}
