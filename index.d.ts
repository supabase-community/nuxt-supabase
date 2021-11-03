import {SupabaseClient, SupabaseClientOptions, Session, User, useSupabase, useSupabaseAuth, useSupabaseStorage} from 'vue-supabase'

declare module '@nuxt/types' {
  interface Context {
    $supabase: SupabaseClient
  }
}

declare module 'vuex' {
  interface Store {
    $supabase: SupabaseClient
  }
}

export { 
  SupabaseClient,
  SupabaseClientOptions,
  Session,
  User,
  useSupabase,
  useSupabaseAuth,
  useSupabaseStorage
}