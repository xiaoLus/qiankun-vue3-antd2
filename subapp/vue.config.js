
module.exports = {
  configureWebpack: {
      output: {
          library: 'test-[name]',
          libraryTarget: 'umd',
          jsonpFunction: `webpackJsonp_test`,
      }
  },
  devServer: {
      port: '10011',
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      },
  }
}

