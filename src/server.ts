import express from 'express'
import { createClient } from '@supabase/supabase-js'
import { ModuleOptions } from './module'

export const authHandler = (moduleOptions: ModuleOptions) => {
  const { supabaseKey, supabaseUrl, supabaseOptions } = moduleOptions
  
  const app = express()
  const supabase = createClient(supabaseUrl, supabaseKey, supabaseOptions)
  
  app.use(express.json())
  app.use('/set-auth-cookie', async (req, res) => {
    supabase.auth.api.setAuthCookie(req, res)
    return 'auth cookie set'
  })

  return app
}