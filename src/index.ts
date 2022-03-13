import nuxtModule from "./module";
import {
  SupabaseClient as _SupabaseClient,
  SupabaseClientOptions as _SupabaseClientOptions,
  SupabaseRealtimePayload as _SupabaseRealtimePayload,
  Subscription as _Subscription,
  User as _User,
  Session as _Session,
} from "vue-supabase";

export type SupabaseClient = _SupabaseClient;
export type SupabaseClientOptions = _SupabaseClientOptions;
export type SupabaseRealtimePayload = _SupabaseRealtimePayload<unknown>;
export type Subscription = _Subscription;
export type User = _User;
export type Session = _Session;

export default nuxtModule;
