<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  import NavBar from "../components/NavBar.svelte";
  import AvailablePedal from "../components/pedals/AvailablePedal.svelte";
  import { getAvailablePedals } from "../services/api";

  import { availablePedals } from "../store";

  const loading = writable(false);

  onMount(async () => {
    try {
      loading.set(true);
      const _pedals = await getAvailablePedals();
      availablePedals.set(_pedals);
    } catch (e: any) {
      console.log(e);
    } finally {
      loading.set(false);
    }
  });
</script>

<NavBar />
<main class="container max-w-3xl mx-auto">
  <div class="text-center py-8">
    <h1
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
    >
      Available Pedals
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
          {#if $loading}
            <div />
          {:else if $availablePedals.length === 0}
            <div class="align-center justify-center text-center">
              You can't build any pedals with your components. Go to the <a
                href="/parts"
                class="text-gradient
                bg-gradient-l-orange-dark
                hover:bg-gradient-r-orange-dark">Parts Box</a
              > tab to add some parts.
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
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >Build Doc Link</th
                  >
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {#each $availablePedals as pedal}
                  <AvailablePedal {pedal} />
                {/each}
              </tbody>
            </table>
          {/if}
        </div>
      </div>
    </div>
  </div>
</main>
