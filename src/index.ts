import path from 'path'
import { defineNuxtModule, addServerMiddleware, addPluginTemplate } from '@nuxt/kit-edge'
import { authHandler } from './server'
import { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  name: 'nuxt-supabase',
  configKey: 'supabase',
  setup (resolvedOptions, nuxt) {

    addServerMiddleware({
      path: '/api/auth',
      handler: authHandler(resolvedOptions)
    })

    addPluginTemplate({
      src: path.resolve(__dirname, "templates/plugin.mjs"),
      filename: 'supabase-plugin.js',
      options: resolvedOptions
    })
  }
})

module.exports.meta = require("../package.json");