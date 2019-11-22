module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/scss/index.scss";'
      }
    }
  }
};
