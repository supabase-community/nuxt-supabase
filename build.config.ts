import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  externals: [
    "vue",
    "@supabase/supabase-js",
    "@supabase/gotrue-js",
    "@supabase/realtime-js",
    "@supabase/storage-js",
    "@supabase/postgrest-js",
    "@nuxt/kit",
    "@nuxt/schema",
    "#app",
  ],
  rollup: {
    emitCJS: true,
  },
});
