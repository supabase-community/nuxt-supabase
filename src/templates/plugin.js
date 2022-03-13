import Vue from "vue";
import { createVueSupabase } from "vue-supabase";

const supabase = createVueSupabase({
  supabaseUrl: "<%= options.supabaseUrl %>",
  supabaseKey: "<%= options.supabaseKey %>",
  supabaseOptions: <%= serialize(options.supabaseOptions) %>,
});

Vue.use(supabase);

// Inject Supabase into Nuxt Context
export default (ctx, inject) => {
  // ctx.$supabase = supabase;
  inject("supabase", supabase);
};
