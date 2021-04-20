const path = require("path");

module.exports = {
  mode: "development",
  entry: "./build/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "secondedition.js",
    library: "se",
    libraryTarget: "umd",
  },
};
