<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  import NavBar from "./components/NavBar.svelte";
  import Loader from "./components/loader.svelte";
  import Route from "./components/pager/route.svelte";
  import Router from "./components/pager/router.svelte";

  import PartsBox from "./pages/PartsBox.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import PedalEditor from "./pages/PedalEditor.svelte";
  import Landing from "./pages/Landing.svelte";

  import { useAuth0 } from "./services/auth0";

  const loadingError = writable(false);

  let {
    auth0Client,
    isLoading,
    isAuthenticated,
    user,
    login,
    initializeAuth0,
    createAuth0Client,
  } = useAuth0;

  const authenticationGuard = (ctx, next) => {
    if ($isAuthenticated) {
      next();
    } else {
      login({ appState: { targetUrl: ctx.pathname } });
    }
  };

  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

  onMount(async () => {
    await initializeAuth0({ onRedirectCallback });
  });
</script>

{#if $isLoading}
  <div class="page-layout">
    <Loader />
  </div>
{:else if $loadingError}
  <div>Loading error.</div>
{:else}
  <Router>
    <Route path="/" component={Landing} />
    <Route
      path="/parts"
      component={PartsBox}
      middleware={[authenticationGuard]}
    />
    <Route
      path="/pedals"
      component={PedalEditor}
      middleware={[authenticationGuard]}
    />
    <Route path="*" component={NotFound} />
  </Router>
{/if}

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @layer utilities {
    .text-gradient {
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
