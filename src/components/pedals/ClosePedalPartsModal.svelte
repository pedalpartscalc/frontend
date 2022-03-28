<script lang="ts">
  import { Button } from "../lib";
  import Modal, { getModal } from "../lib/Modal.svelte";
  import { modalClosePedal } from "../../store";

  modalClosePedal.subscribe((p) => {
    console.log(p);
  });

  const getQuantityOnHand = (short_part) => {
    return (
      $modalClosePedal?.required_parts?.find((rp) => rp.id === short_part.id)
        ?.quantity - short_part.quantity ?? 0
    );
  };

  const onClose = () => {
    getModal("close_pedal_parts").close();
    modalClosePedal.set(null);
  };
</script>

<Modal id="close_pedal_parts">
  {#if $modalClosePedal}
    <div class="flex flex-col gap-4 content-center w-full">
      <h1 class="text-xl mx-auto">
        Missing Parts for "{$modalClosePedal.name}"
      </h1>
      <div>
        <table class="min-w-full divide-y divide-gray-200">
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
                >Additional Needed</th
              >
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Quantity On Hand</th
              >
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#each $modalClosePedal.short_parts as part}
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">{part.part_name}</td>
                <td class="px-6 py-4 whitespace-nowrap">{part.part_kind}</td>
                <td class="px-6 py-4 whitespace-nowrap">{part.quantity}</td>
                <td class="px-6 py-4 whitespace-nowrap"
                  >{getQuantityOnHand(part)}</td
                >
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <hr class="m-2" />
      <div class="flex flex-row gap-4 w-full mx-auto justify-around">
        <Button color="gray-400" on:click={onClose}>Close</Button>
        <Button
          color="blue-500"
          on:click={() => {
            window.location.replace(`/pedals/${$modalClosePedal.id}`);
          }}>View Pedal Details</Button
        >
      </div>
    </div>
  {/if}
</Modal>
