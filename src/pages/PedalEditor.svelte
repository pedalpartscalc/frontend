<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  import { getModal } from "../lib/Modal.svelte";

  import { getPedals } from "../services/api";
  import { useAuth0 } from "../services/auth0";
  import PedalComponent from "../components/pedals/Pedal.svelte";
  import PedalAddEditModal from "../components/pedals/PedalAddEditModal.svelte";
  import { pedals } from "../store";

  let modalPedal;

  const loadingError = writable(false);

  const openModal = (pedal) => {
    modalPedal = pedal;
    getModal("pedal_edit_modal").open();
  };

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

<main class="container max-w-3xl mx-auto">
  <div class="text-center py-8">
    <h1
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
    >
      Pedals
    </h1>
  </div>

  <div class="container py-4">
    <div
      class="flex flex-col items-center -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
    >
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          {#if $pedals.length === 0}
            <div class="align-center justify-center text-center">
              No pedals available. Would you like to add one?
            </div>
          {:else}
            <table class="min-w-full divide-y divide-gray-200">
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
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {#each $pedals as pedal}
                  <PedalComponent {pedal} {openModal} />
                {/each}
              </tbody>
            </table>
          {/if}
        </div>
      </div>
      <div class="py-4 inline-flex justify-center min-w-full sm:px-6 lg:px-8">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
          on:click={() => getModal("pedal_edit_modal").open()}
          >Add New Pedal</button
        >
      </div>
    </div>
  </div>
</main>

<PedalAddEditModal {modalPedal} />
