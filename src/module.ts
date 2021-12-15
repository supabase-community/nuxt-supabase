import path from 'path'
import {
  SupabaseClientOptions,
} from "vue-supabase";
import { defineNuxtModule, addServerMiddleware, addPluginTemplate } from '@nuxt/kit-edge'
import { authHandler } from './server'

export type ModuleOptions = {
  supabaseUrl: string
  supabaseKey: string
  supabaseOptions: SupabaseClientOptions
}

const nuxtModule = defineNuxtModule<ModuleOptions>({
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

export default nuxtModule

module.exports.meta = require("../package.json");