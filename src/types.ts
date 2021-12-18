import { SupabasePluginOptions } from "vue-supabase";

export type ModuleOptions = {
  auth?: {
    onAuthStateChangeMutation?: string;
    onAuthStateChangeAction?: string;
  };
} & SupabasePluginOptions;
