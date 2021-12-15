import {
  SupabaseClient,
  SupabaseClientOptions,
  Session,
  AuthUser as User,
  // useSupabase,
  // useSupabaseAuth,
  // useSupabaseStorage,
} from "@supabase/supabase-js";

declare module "@nuxt/types" {
  interface Context {
    $supabase: SupabaseClient;
  }
}

declare module "vuex" {
  interface Store {
    $supabase: SupabaseClient;
  }
}

export {
  SupabaseClient,
  SupabaseClientOptions,
  Session,
  User,
  // useSupabase,
  // useSupabaseAuth,
  // useSupabaseStorage,
};
