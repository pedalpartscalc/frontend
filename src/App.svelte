<script lang="ts">
  import { onMount } from "svelte";

  import AvailableParts from "./AvailableParts.svelte";
  import PartAddEditModal from "./PartAddEditModal.svelte";
  import {getModal} from "./lib/Modal.svelte";
  import NavBar from "./components/nav-bar.svelte";
  import Loader from "./components/loader.svelte";

  import { useAuth0 } from "./services/auth0";

  import {getAvailablePedals} from "./services/api";

  let modalPart;

  function openModal(part) {
    modalPart = part;
    getModal("part_edit_modal").open();
  }

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
    const pedal = await getAvailablePedals();
    console.log(pedal);
  });
</script>

{#if $isLoading}
  <div class="page-layout">
    <Loader />
  </div>
{/if}

{#if !$isLoading}
<NavBar />
<main class="container max-w-3xl mx-auto">
  <div class="text-center py-8">
    <h1
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
    >
      Pedal Parts Calculator
    </h1>
    <h3 class="text-lg text-gray-800">
      Find out what guitar pedals you can build with the parts you have on hand.
    </h3>
  </div>

  <AvailableParts {openModal} />
</main>

<PartAddEditModal {modalPart} />

{/if}

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
