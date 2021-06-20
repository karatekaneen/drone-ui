module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: "dist/files",
  publicPath: process.env.VUE_APP_BASE_URL || "/"
};
