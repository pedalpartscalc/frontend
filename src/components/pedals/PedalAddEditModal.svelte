<script lang="ts">
  import { writable } from "svelte/store";

  import { Pedal, PEDAL_KINDS, PART_TYPES, NewRequiredPart } from "../../types";
  import { Validators } from "../../lib/Validators";
  import Form from "../../lib/Form.svelte";
  import Input from "../../lib/Input.svelte";
  import Error from "../../lib/Error.svelte";
  import Select from "../../lib/Select.svelte";
  import Modal, { getModal } from "../../lib/Modal.svelte";
  import { pedals } from "../../store";
  import {
    createPedal,
    updatePedal,
    createRequiredPart,
  } from "../../services/api";
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
    quantity: string;
  }

  let parts = writable([
    {
      name: "",
      kind: "",
      quantity: "1",
    },
  ]);

  const addInput = () => {
    parts.update((i) => [...i, { name: "", kind: "", quantity: "1" }]);
  };

  const removeInput = () => {
    parts.update((i) => {
      i.pop();
      return i;
    });
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
    const pedalData = {
      name: data.name,
      kind: data.kind,
    };

    let partsData = {};
    for (const [k, v] of Object.entries(data)) {
      const matches = k.match(/\d+/);
      if (!matches) continue;
      const partNum = matches[0];

      const partKey = k.replace("_" + partNum, "");
      if (!partsData[partNum]) {
        partsData[partNum] = {};
      }
      if (partKey === "quantity") {
        partsData[partNum][partKey] = parseInt(v as string);
      } else {
        partsData[partNum][partKey] = v;
      }
    }

    pedals.update((p) => [...p, pedalData]);
    const pedalId = await createPedal(pedalData);

    for (const [_, v] of Object.entries(partsData)) {
      await createRequiredPart(pedalId, v as NewRequiredPart);
    }
  };

  const onSubmit = async (e) => {
    if (e?.detail?.valid) {
      const data = e?.detail?.data;
      console.log(data);
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
        {#each $parts as part, i}
          <div class="flex flex-row justify-around">
            <Input name={`part_name_${i}`} value={part.name} />
            <Select name={`part_kind_${i}`} value={part.kind}>
              {#each PART_TYPES as kind}
                <option value={kind}>{kind}</option>
              {/each}
            </Select>
            <Input name={`quantity_${i}`} type="number" value={part.quantity} />
          </div>
        {/each}
      </div>

      <div class="flex flex-row justify-center mt-4">
        <Button color="blue-500" on:click={addInput}>Add Part</Button>
        <Button on:click={removeInput}>Remove Part</Button>
      </div>

      <hr class="mx-2 mt-4" />

      <div class="mx-auto px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <Button color="blue-500" type="submit">Save</Button>
        <Button
          color="gray-400"
          on:click={() => getModal("pedal_edit_modal").close("")}>Cancel</Button
        >
      </div>
    </div>
  </Form>
</Modal>
