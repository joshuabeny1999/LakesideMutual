module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/customer-self-service-frontend/'
    : '/',
  runtimeCompiler: true,
  devServer: {
    host: 'localhost',
    port: 3010
  }
}
