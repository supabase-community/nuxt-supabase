import { SupabaseClient } from '@supabase/supabase-js'

declare module '@nuxt/types' {
  interface Context {
    $supabase: SupabaseClient
  }
}

declare module 'vuex' {
  interface Store<S> {
    $supabase: SupabaseClient
  }
}
