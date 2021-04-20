const path = require("path");

module.exports = {
  mode: "production",
  entry: "./build/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "umd.js",
    library: "se",
    libraryTarget: "umd",
  },
};
