<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  import { getModal } from "../components/lib/Modal.svelte";

  import { getPedals } from "../services/api";
  import { useAuth0 } from "../services/auth0";

  import PedalComponent from "../components/pedals/Pedal.svelte";
  import PedalAddEditModal from "../components/pedals/PedalAddEditModal.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Button from "../components/lib/Button.svelte";

  import { modalPedal, pedals, isAdminUser } from "../store";
  import DeletePedalModal from "../components/pedals/DeletePedalModal.svelte";

  const loadingError = writable(false);

  let { login } = useAuth0;

  const fetchPedals = async () => {
    const _pedals = await getPedals();
    pedals.set(_pedals);
  };

  onMount(async () => {
    try {
      await fetchPedals();
    } catch (e: any) {
      if (e === "Error: Login required") {
        login({ appState: { targetUrl: "/parts" } });
        await fetchPedals();
      } else {
        loadingError.set(true);
      }
    }
  });
</script>

<NavBar />
<main class="container w-full max-w-7xl mx-auto">
  <div class="text-center py-8">
    <h1
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
    >
      Pedals
    </h1>
  </div>

  <div class="py-4">
    <div class="flex flex-col items-center">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow border-b border-gray-200 sm:rounded-lg">
          {#if $pedals.length === 0}
            <div class="align-center justify-center text-center">
              No pedals available. Would you like to add one?
            </div>
          {:else}
            <table class="w-full divide-y divide-gray-200 table-fixed">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >Pedal Name</th
                  >
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >Pedal Type</th
                  >
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >Part Quantity</th
                  >
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >Build Doc Link</th
                  >
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {#each $pedals as pedal}
                  <PedalComponent {pedal} />
                {/each}
              </tbody>
            </table>
          {/if}
        </div>
      </div>
      {#if $isAdminUser}
        <div class="py-4 inline-flex justify-center min-w-full sm:px-6 lg:px-8">
          <Button
            type="button"
            on:click={() =>
              getModal("pedal_edit_modal").open(() => {
                modalPedal.set(null);
              })}>Add New Pedal</Button
          >
        </div>
      {/if}
    </div>
  </div>
</main>

<PedalAddEditModal />
<DeletePedalModal />
