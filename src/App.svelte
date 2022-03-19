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
  import AvailablePedals from "./pages/AvailablePedals.svelte";

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

<head>
  <title>Pedal Parts Calculator</title>
  <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/static/favicon-32x32.png" type="image/png" />
  <link
    rel="apple-touch-icon"
    sizes="48x48"
    href="/icons/icon-48x48.png?v=dec44f98b636b180cee9fb8274ba0287"
  />
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="/icons/icon-72x72.png?v=dec44f98b636b180cee9fb8274ba0287"
  />
  <link
    rel="apple-touch-icon"
    sizes="96x96"
    href="/icons/icon-96x96.png?v=dec44f98b636b180cee9fb8274ba0287"
  />
  <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="/icons/icon-144x144.png?v=dec44f98b636b180cee9fb8274ba0287"
  />
  <link
    rel="apple-touch-icon"
    sizes="192x192"
    href="/icons/icon-192x192.png?v=dec44f98b636b180cee9fb8274ba0287"
  />
  <link
    rel="apple-touch-icon"
    sizes="256x256"
    href="/icons/icon-256x256.png?v=dec44f98b636b180cee9fb8274ba0287"
  />
  <link
    rel="apple-touch-icon"
    sizes="384x384"
    href="/icons/icon-384x384.png?v=dec44f98b636b180cee9fb8274ba0287"
  />
  <link
    rel="apple-touch-icon"
    sizes="512x512"
    href="/icons/icon-512x512.png?v=dec44f98b636b180cee9fb8274ba0287"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Ubuntu"
  />
</head>

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
      path="/home"
      component={AvailablePedals}
      middleware={[authenticationGuard]}
    />
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
