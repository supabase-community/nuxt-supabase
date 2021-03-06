import Vue from 'vue'
import VueSupabase from 'vue-supabase'

Vue.use(VueSupabase, {
  supabaseUrl: '<%= options.supabaseUrl %>',
  supabaseKey: '<%= options.supabaseKey %>'
})

// Inject Supabase into Nuxt Context
export default (ctx, inject) => {
  ctx.$supabase = Vue.supabase
  inject('$supabase', Vue.supabase)
}
