<script lang="ts">
  import { writable } from "svelte/store";

  import { Pedal, PEDAL_KINDS, PART_TYPES } from "../../types";
  import { Validators } from "../../lib/Validators";
  import Form from "../../lib/Form.svelte";
  import Input from "../../lib/Input.svelte";
  import Error from "../../lib/Error.svelte";
  import Select from "../../lib/Select.svelte";
  import Modal, { getModal } from "../../lib/Modal.svelte";
  import { pedals } from "../../store";
  import { createPedal, updatePedal } from "../../services/api";
  import Button from "../lib/Button.svelte";

  export let modalPedal: Pedal;

  let form = {
    name: {
      validators: [Validators.required],
    },
    kind: {
      validators: [Validators.required],
    },
  };

  interface RequiredPartsInput {
    name: string;
    kind: string;
    quantity: number;
  }

  let inputs = writable([
    {
      name: "",
      kind: "",
      quantity: 0,
    },
  ]);

  const addInput = () => {
    inputs.update((i) => [...i, { name: "", kind: "", quantity: 0 }]);
  };

  const removeInput = () => {
    inputs.update((i) => {
      i.pop();
      return i;
    });
  };

  const callFocus = (input) => {
    input.focus();
  };

  const saveToApi = async (data) => {
    pedals.update((p) => {
      const idx = p.findIndex((pedal) => pedal.id === modalPedal?.id);
      p[idx] = data;
      return p;
    });
    await updatePedal(modalPedal.id, data);
  };

  const createNewPedal = async (data) => {
    pedals.update((p) => [...p, data]);
    await createPedal(data);
  };

  const onSubmit = async (e) => {
    if (e?.detail?.valid) {
      const data = e?.detail?.data;
      if (!data) return;
      if (!modalPedal) {
        await createNewPedal(data);
      } else {
        await saveToApi(data);
      }
      getModal("pedal_edit_modal").close("");
    } else {
      console.log("Invalid Form");
    }
  };
</script>

<Modal id="pedal_edit_modal">
  <div class="text-lg text-center pb-2">
    {#if !!modalPedal}Edit Pedal{:else}New Pedal{/if}
  </div>

  <Form {form} on:submit={onSubmit}>
    <div class="flex flex-col content-center">
      <div
        class="mx-auto max-w-xs w-full flex flex-col content-center align-middle space-y-2"
      >
        <Input label="Name" name="name" value={modalPedal?.name} />
        <Error
          fieldName="name"
          errorKey="required"
          message="Name is required"
        />
        <Select label="Pedal Type" name="kind" value={modalPedal?.kind}>
          {#each PEDAL_KINDS as kind}
            <option value={kind}>{kind}</option>
          {/each}
        </Select>
      </div>

      <hr class="mx-2 mt-4" />

      <div class="mx-auto mt-4 mb-2">
        <h3 class="text-lg text-gray-800">Required Parts</h3>
      </div>

      <div class="space-y-2">
        <div class="flex flex-row justify-around">
          <p class="mx-2">Part Name</p>
          <p class="mx-2">Part Type</p>
          <p class="mx-2">Quantity</p>
        </div>
        {#each $inputs as i}
          <div class="flex flex-row justify-around">
            <input class="mx-2" type="text" bind:value={i.name} use:callFocus />
            <select class="mx-2" name="kind" value={i.kind}>
              {#each PART_TYPES as kind}
                <option value={kind}>{kind}</option>
              {/each}
            </select>
            <input
              class="mx-2"
              type="number"
              bind:value={i.quantity}
              use:callFocus
            />
          </div>
        {/each}
      </div>

      <div class="flex flex-row justify-center mt-4">
        <Button color="blue-500" on:click={addInput}>Add Part</Button>
        <Button on:click={removeInput}>Remove Part</Button>
      </div>

      <hr class="mx-2 mt-4" />

      <div class="mx-auto px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          type="submit">Save</button
        >
        <Button
          color="gray-400"
          on:click={() => getModal("pedal_edit_modal").close("")}>Cancel</Button
        >
      </div>
    </div>
  </Form>
</Modal>
