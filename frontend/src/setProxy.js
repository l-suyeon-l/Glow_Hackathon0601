const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http:/35.208.234.110:8080',
      changeOrigin: true,
    })
  );
};