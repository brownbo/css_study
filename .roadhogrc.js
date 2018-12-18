export default {
  entry: "src/index.js",
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        ['import', {'libraryName': 'antd', 'libraryDirectory': 'lib', 'style': true}]
      ]
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        ['import', {'libraryName': 'antd', 'libraryDirectory': 'lib', 'style': true}]
      ]
    },
  },
  sass:{},
  // proxy: {
  //   "/api": {
  //     "target": "http://192.168.31.47:3001",//
  //     "changeOrigin": true,
  //   },
  //   "/admin": {
  //     "target": "http://192.168.31.47:3001",
  //     "changeOrigin": true,
  //   },
  //   "/static": {
  //     "target": "http://192.168.31.47:3001",
  //     "changeOrigin": true,
  //   },
  // },
  "disableCSSModules": true
}
