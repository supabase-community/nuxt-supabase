import path from "path";
import {
  defineNuxtModule,
  addServerMiddleware,
  addPluginTemplate,
} from "@nuxt/kit-edge";
import { authHandler } from "./server";
import { ModuleOptions } from "./types";

const nuxtModule = defineNuxtModule<ModuleOptions>({
  name: "nuxt-supabase",
  configKey: "supabase",
  setup(resolvedOptions, nuxtApp) {
    addServerMiddleware({
      path: "/api/auth",
      handler: authHandler(resolvedOptions),
    });

    addPluginTemplate({
      src: path.resolve(__dirname, "templates/cookie.client.mjs"),
      filename: "supabase-cookie.js",
      options: resolvedOptions,
    });

    addPluginTemplate({
      src: path.resolve(__dirname, "templates/plugin.mjs"),
      filename: "supabase.js",
      options: resolvedOptions,
    });
  },
});

export default nuxtModule;

module.exports.meta = require("../package.json");
