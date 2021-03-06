const path = require('path')

export default function (options) {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'supabase.js',
    options,
  })
}
