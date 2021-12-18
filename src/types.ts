import { SupabaseClientOptions } from "vue-supabase";

export type ModuleOptions = {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions: SupabaseClientOptions;
};
