<script lang="ts">
  import { onMount } from "svelte";
  import TextButton from "../components/lib/TextButton.svelte";
  import NavBar from "../components/NavBar.svelte";
  import { getPedal } from "../services/api";

  export let pedalId;
  let pedal;

  const fetchPedal = async () => {
    pedal = await getPedal(pedalId);
  };

  onMount(fetchPedal);
</script>

<NavBar />
{#if pedal}
  <div class="my-8 w-screen flex flex-col gap-4 content-center">
    <h1 class="text-xl mx-auto">Pedal "{pedal.name}"</h1>
    <div class="mx-auto flex flex-row gap-4">
      <div>
        {pedal.kind}
      </div>
      <div>
        <a class="text-ppc hover:text-ppc-light" href={pedal.build_doc_link}
          >Build Doc Link</a
        >
      </div>
    </div>

    <hr class="m-2" />

    <div class="mx-auto">
      <h2 class="text-lg">Required Parts</h2>
    </div>
    <table class="mx-auto max-w-2xl divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >Part Name</th
          >
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >Part Kind</th
          >
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >Quantity Needed</th
          >
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each pedal.required_parts as part}
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">{part.part_name}</td>
            <td class="px-6 py-4 whitespace-nowrap">{part.part_kind}</td>
            <td class="px-6 py-4 whitespace-nowrap">{part.quantity}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}
