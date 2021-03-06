const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  outputDir: path.join(__dirname, "dist_vue"),
  transpileDependencies: true,
  productionSourceMap: false,
})
