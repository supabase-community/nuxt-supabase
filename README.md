# Nuxt + Supabase

A supa simple wrapper around Supabase.js to enable usage within Nuxt.

This package uses [vue-supabase](https://github.com/supabase/vue-supabase).

## Install

```bash
yarn add nuxt-supabase
```

## Configure

Add the following to your nuxt.config.js file.

```js
modules: [
  ['nuxt-supabase', {
    supabaseUrl: 'YOUR_SUPABASE_URL',
    supabaseKey: 'YOUR_SUPABASE_KEY'
  }]
],
```
### TypeScript
Add the package to your tsconfig.json to make typescript aware of the additional types to the the nuxt context
```json
{
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "nuxt-supabase"
    ]
  }
}
```

## Usage

You can then use supabase within your Nuxt context, or Vue components.

```vue
<script>
export default {
  async asyncData({ $supabase }) {
    return {
      events: await $supabase.from("events").select("*");
    }
  }
}
</script>
```
```vue
<script>
export default {
  data() {
    return {
      events: null,
    };
  },
  methods: {
    async getEvents() {
      this.events = await this.$supabase.from("events").select("*");
    },
  },
};
</script>
```
