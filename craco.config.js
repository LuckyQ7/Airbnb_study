const path = require("path");
const CracoLessPlugin = require("craco-less");

const pathResolve = (pathName) => path.resolve(__dirname, pathName);
module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
      components: pathResolve("components"),
      utils: pathResolve("utils"),
      hooks: pathResolve("hooks"),
      services: pathResolve("services"),
      assets: pathResolve("assets"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
