# Nuxt + Supabase

A supa simple wrapper around Supabase.js to enable usage within Nuxt.

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

## Usage

You can then use supabase within your Nuxt context, or Vue components.

```vue
<script>
export default {
  asyncData({ $supabase }) {
    return {
      events: await $supabase.from("events").select("*");
    }
  }
}
</script>

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
