import path from 'path'
import { defineNuxtModule, addPluginTemplate } from '@nuxt/kit-edge'

export default defineNuxtModule({
  name: 'nuxt-supabase',
  configKey: 'supabase',
  setup (resolvedOptions, nuxt) {
    addPluginTemplate({
      src: path.resolve(__dirname, "templates/plugin.mjs"),
      filename: 'supabase-plugin.js',
      options: resolvedOptions
    })
  }
})

module.exports.meta = require("../package.json");