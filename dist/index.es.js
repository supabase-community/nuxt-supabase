const path = require("path");
function index(options) {
  this.addPlugin({
    src: path.resolve(__dirname, "templates/plugin.mjs"),
    fileName: "supabase.js",
    options
  });
}
module.exports.meta = require("../package.json");

export { index as default };
