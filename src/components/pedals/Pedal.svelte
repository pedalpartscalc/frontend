<script lang="ts">
  import type { Pedal } from "../../types";
  import { getModal } from "../lib/Modal.svelte";
  import { modalPedal, isAdminUser, deleteModalPedal } from "../../store";
  import TextButton from "../lib/TextButton.svelte";

  export let pedal: Pedal;

  const openEditModal = () => {
    modalPedal.set(pedal);
    getModal("pedal_edit_modal").open(() => {
      modalPedal.set(null);
    });
  };

  const openDeleteModal = () => {
    deleteModalPedal.set(pedal);
    getModal("pedal_delete_modal").open(() => {
      deleteModalPedal.set(null);
    });
  };
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
      text-ppc
      hover:ppc-dark
      visited:text-gray-500
      dark:visited:text-gray-300"
        href={pedal.build_doc_link}>{pedal.build_doc_link}</a
      >
    {:else}
      {""}
    {/if}
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <a class="text-ppc hover:text-ppc-light" href={`/pedals/${pedal.id}`}
      >Details</a
    >
    {#if $isAdminUser}
      <TextButton on:click={openEditModal}>Edit</TextButton>
      <TextButton on:click={openDeleteModal}>Delete</TextButton>
    {/if}
  </td>
</tr>

<style>
  td {
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
  }
</style>
