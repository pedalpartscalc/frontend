<script lang="ts">
  import type { Pedal } from "../../types";
  import { modalPedal } from "../../store";
  import TextButton from "../lib/TextButton.svelte";

  export let pedal: Pedal;
  export let openModal;

  // maybe eventually add a pedal deletion thing, but need to add an "are you sure?" thing first
</script>

<tr>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm font-medium text-gray-900">
      {pedal.name}
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">{pedal.kind}</div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    {pedal?.required_parts?.length ?? 0}
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-12">
    {#if !!pedal?.build_doc_link}
      <a
        class="font-medium
      text-gradient
      lg:bg-gradient-l-orange-dark
      lg:hover:bg-gradient-r-orange-dark
      visited:text-gray-500
      dark:visited:text-gray-300"
        href={pedal.build_doc_link}>{pedal.build_doc_link}</a
      >
    {:else}
      {""}
    {/if}
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <TextButton
      on:click={() => {
        modalPedal.set(pedal);
        openModal();
      }}>Edit</TextButton
    >
    <!-- <button
      on:click={deletePart}
      class="px-2 border-none text-indigo-600 hover:text-indigo-900"
      >Delete</button
    > -->
  </td>
</tr>

<style>
  td {
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
  }
</style>
