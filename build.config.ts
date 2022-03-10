import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  entries: [
    { input: "src/module" },
    { input: "src/composables" },
    { input: "src/templates/", outDir: "dist/templates/", format: "esm" },
  ],
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
