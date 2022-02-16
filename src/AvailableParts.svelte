<script>
  export let openModal;

  import { onMount } from "svelte";
  import Part from "./Part.svelte";
  import { getModal } from "./lib/Modal.svelte";
  // define the data holding variable
  let parts;

  onMount(async () => {
    await fetch(`http://localhost:8000/parts`)
      .then((r) => r.json())
      .then((data) => {
        parts = data;
      });
  });
</script>

<div class="container py-4">
  {#if parts}
    <div
      class="flex flex-col items-center -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
    >
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >Component Name</th
                >
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >Component Type</th
                >
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >Quantity</th
                >
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each parts as part}
                <Part {part} {openModal} />
              {/each}
            </tbody>
          </table>
        </div>
      </div>
      <div class="py-4 inline-flex justify-center min-w-full sm:px-6 lg:px-8">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
          on:click={() => getModal("part_edit_modal").open()}
          >Add New Part</button
        >
      </div>
    </div>
  {:else}
    <p class="loading">loading...</p>
  {/if}
</div>
