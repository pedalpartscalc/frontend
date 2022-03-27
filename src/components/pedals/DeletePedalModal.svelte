<script lang="ts">
  import { writable } from "svelte/store";

  import { Modal, Button, Loader } from "../lib";
  import { getModal } from "../lib/Modal.svelte";
  import { deleteModalPedal, pedals } from "../../store";
  import { deletePedal } from "../../services/api";

  const isLoading = writable(false);

  const onCancel = () => {
    deleteModalPedal.set(null);
    getModal("pedal_delete_modal").close();
  };

  const onSubmit = () => {
    isLoading.set(true);

    try {
      deletePedal($deleteModalPedal?.id);
      pedals.update((p) =>
        p.filter((pedal) => pedal.id !== $deleteModalPedal?.id)
      );

      isLoading.set(false);
      onCancel();
    } catch (error) {
      console.error(error);
    }
  };
</script>

<Modal id="pedal_delete_modal">
  <div class="flex flex-col gap-4">
    <h3 class="text-lg">
      Are you sure you would like to delete the pedal "{$deleteModalPedal?.name}"?
    </h3>

    <hr class="m-2" />

    <div class="flex flex-row gap-4 w-full mx-auto justify-around">
      {#if $isLoading}
        <div class="mx-2">
          <Loader />
        </div>
      {:else}
        <Button color="gray-400" on:click={onCancel}>Cancel</Button>
      {/if}
      <Button color="red-500" on:click={onSubmit}>Delete</Button>
    </div>
  </div>
</Modal>
