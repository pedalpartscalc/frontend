<script lang="ts">
  export let openModal;

  import Part from "./Part.svelte";
  import { getModal } from "../lib/Modal.svelte";
  import { availableParts } from "../../store";
  import Button from "../lib/Button.svelte";
</script>

<div class="container py-4">
  <div
    class="flex flex-col items-center -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
  >
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        {#if $availableParts.length === 0}
          <div class="align-center justify-center text-center">
            No parts available. Would you like to add one?
          </div>
        {:else}
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
              {#each $availableParts as part}
                <Part {part} {openModal} />
              {/each}
            </tbody>
          </table>
        {/if}
      </div>
    </div>
    <div class="py-4 inline-flex justify-center min-w-full sm:px-6 lg:px-8">
      <Button type="button" on:click={() => getModal("part_edit_modal").open()}
        >Add New Part</Button
      >
    </div>
  </div>
</div>
