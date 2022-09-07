const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "./dist"),
  devServer: {
    proxy: {
      "/api/user/register": {
        target: "http://localhost:3000",
      },
      "/api/user/login": {
        target: "http://localhost:3000",
      },
      "/api/user/pricing": {
        target: "http://localhost:3000",
      },
    },
  },
});
