const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/todos", {
    target: "http://localhost:8080",
    secure: false,
    changeOrigin: true
  }));
};
