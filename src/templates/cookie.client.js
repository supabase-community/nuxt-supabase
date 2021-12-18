const vuexMutation = "<%= options.auth?.onAuthStateChangeMutation %>";
const vuexAction = "<%= options.auth?.onAuthStateChangeAction %>";

export default function ({ app, $supabase, store, req }) {
  if (!app.mixins) {
    app.mixins = [];
  }

  app.mixins.push({
    mounted() {
      $supabase.auth.onAuthStateChange(async (event, session) => {
        await setServerSession(event, session);
        const user = $supabase.auth.user();
        if (vuexMutation) {
          store.commit(vuexMutation, user);
        }
        if (vuexAction) {
          store.dispatch(vuexAction, user);
        }
      });
    },
  });
}

const setServerSession = (event, session) => {
  return fetch("/api/auth/set-auth-cookie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ event, session }),
  });
};
