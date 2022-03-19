<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  import { getModal } from "../components/lib/Modal.svelte";
  import AvailableParts from "../components/parts/AvailableParts.svelte";
  import PartAddEditModal from "../components/parts/PartAddEditModal.svelte";
  import NavBar from "../components/NavBar.svelte";

  import { getParts } from "../services/api";
  import { useAuth0 } from "../services/auth0";
  import { availableParts } from "../store";

  let modalPart;

  let {
    auth0Client,
    isLoading,
    isAuthenticated,
    user,
    login,
    initializeAuth0,
    createAuth0Client,
  } = useAuth0;

  const loadingError = writable(false);

  function openModal(part) {
    modalPart = part;
    getModal("part_edit_modal").open();
  }

  const fetchAvailableParts = async () => {
    const parts = await getParts();
    availableParts.set(parts);
  };

  onMount(async () => {
    try {
      await fetchAvailableParts();
    } catch (e: any) {
      if (e === "Error: Login required") {
        login({ appState: { targetUrl: "/parts" } });
        await fetchAvailableParts();
      } else {
        loadingError.set(true);
      }
    }
  });
</script>

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
