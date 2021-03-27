module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/hello-world/" : "/",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
