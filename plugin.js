import { createClient } from '@supabase/supabase-js'

export default function (ctx, inject) {
  const client = createClient('<%= options.supabaseUrl %>', '<%= options.supabaseKey %>')
  ctx.$supabase = client
  inject('supabase', client)
}
