<script lang="ts">
  import { Pedal, PEDAL_KINDS } from "../../types";
  import { Validators } from "../../lib/Validators";
  import Form from "../../lib/Form.svelte";
  import Input from "../../lib/Input.svelte";
  import Error from "../../lib/Error.svelte";
  import Select from "../../lib/Select.svelte";
  import Modal, { getModal } from "../../lib/Modal.svelte";
  import { pedals } from "../../store";
  import { createPedal, updatePedal } from "../../services/api";

  export let modalPedal: Pedal;

  let form = {
    name: {
      validators: [Validators.required],
    },
    kind: {
      validators: [Validators.required],
    },
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
  <div class="flex flex-col content-center align-middle">
    <div class="text-lg text-center pb-2">
      {#if !!modalPedal}Edit Pedal{:else}New Pedal{/if}
    </div>
    <Form {form} on:submit={onSubmit}>
      <div>
        <Input label="Name" name="name" value={modalPedal?.name} />
        <Error
          fieldName="name"
          errorKey="required"
          message="Name is required"
        />
      </div>
      <div>
        <Select label="Pedal Type" name="kind" value={modalPedal?.kind}>
          {#each PEDAL_KINDS as kind}
            <option value={kind}>{kind}</option>
          {/each}
        </Select>
      </div>

      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          type="submit">Save</button
        >
        <button
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          on:click={() => getModal("pedal_edit_modal").close("")}>Cancel</button
        >
      </div>
    </Form>
  </div>
</Modal>
