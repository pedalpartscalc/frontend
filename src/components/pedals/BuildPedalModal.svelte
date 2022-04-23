<script lang="ts">
  import { Button, Input, Validators } from "../lib";
  import Modal, { getModal } from "../lib/Modal.svelte";
  import { modalBuildPedal } from "../../store";
  import Form from "../lib/Form.svelte";
  import Checkbox from "../lib/Checkbox.svelte";

  const onClose = () => {
    getModal("build_pedal_parts").close();
    modalBuildPedal.set(null);
  };

  const onSubmit = (data) => {};

  let form = {
    name: {
      validators: [Validators.required],
    },
    kind: {
      validators: [Validators.required],
    },
  };
</script>

<Modal id="build_pedal_parts">
  {#if $modalBuildPedal}
    <div class="flex flex-col gap-4 content-center w-full">
      <h1 class="text-xl mx-auto">
        Build Checklist for "{$modalBuildPedal.name}"
      </h1>
      <div>
        <Form {form} on:submit={onSubmit}>
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
                  >Purchased?</th
                >
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >Quantity Bought</th
                >
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each $modalBuildPedal.short_parts as part, i}
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">{part.part_name}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{part.part_kind}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{part.quantity}</td>
                  <td class="px-6 py-4 whitespace-nowrap"><Checkbox /></td>
                  <td class="px-6 py-4 whitespace-nowrap"
                    ><Input
                      type="number"
                      name={`quant_${i}`}
                      value={part.quantity}
                    /></td
                  >
                </tr>
              {/each}
            </tbody>
          </table>
        </Form>
      </div>
      <hr class="m-2" />
      <div class="flex flex-row gap-4 w-full mx-auto justify-around">
        <Button color="gray-400" on:click={onClose}>Close</Button>
        <Button
          color="blue-500"
          on:click={() => {
            window.location.replace(`/pedals/${$modalBuildPedal.id}`);
          }}>View Pedal Details</Button
        >
      </div>
    </div>
  {/if}
</Modal>
