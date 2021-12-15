import path from 'path'
import { defineNuxtModule, addServerMiddleware, addPluginTemplate } from '@nuxt/kit-edge'
import { SupabaseClientOptions } from "@supabase/supabase-js"
import { authHandler } from './server'

export type ModuleOptions = {
  supabaseUrl: string
  supabaseKey: string
  supabaseOptions: SupabaseClientOptions
}

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
      filename: 'supabase.js',
      options: resolvedOptions
    })
  }
})

module.exports.meta = require("../package.json");