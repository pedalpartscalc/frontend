<script>
  export let modalPart;

  import {
    Form,
    Input,
    Error,
    Select,
    Button,
    Modal,
    Validators,
  } from "../lib";
  import { getModal } from "../lib/Modal.svelte";
  import { PART_TYPES } from "../../types";
  import { availableParts } from "../../store";
  import { createAvailablePart, updateAvailablePart } from "../../services/api";

  let form = {
    part_name: {
      validators: [Validators.required],
    },
    part_kind: {
      validators: [Validators.required],
    },
    quantity: {
      validators: [Validators.required],
    },
  };

  let formEl;

  const saveToApi = async (data) => {
    availableParts.update((parts) => {
      const idx = parts.findIndex((part) => part.id === modalPart?.id);
      parts[idx] = data;
      return parts;
    });
    await updateAvailablePart(modalPart.id, data);
  };

  const createNewPart = async (data) => {
    availableParts.update((parts) => [...parts, data]);
    await createAvailablePart(data);
  };

  const onSubmit = async (e) => {
    if (e?.detail?.valid) {
      const data = e?.detail?.data;
      if (!data) return;

      data.part_name = data.part_name.trim();
      data.part_kind = data.part_kind.trim();
      data.quantity = parseInt(data.quantity);

      if (!modalPart) {
        await createNewPart(data);
      } else {
        await saveToApi(data);
      }
      // setTimeout(() => formEl.reset(), 1000);
      getModal("part_edit_modal").close("");
    } else {
      console.log("Invalid Form");
    }
  };
</script>

<Modal id="part_edit_modal">
  <div class="flex flex-col content-center align-middle">
    <div class="text-lg text-center pb-2">
      {#if !!modalPart}Edit Part{:else}New Part{/if}
    </div>
    <Form {form} on:submit={onSubmit} bind:this={formEl}>
      <div class="w-max flex flex-col gap-2">
        <div>
          <Input label="Name" name="part_name" value={modalPart?.part_name} />
          <Error
            fieldName="part_name"
            errorKey="required"
            message="Name is required"
          />
        </div>
        <div>
          <Select
            label="Part Type"
            name="part_kind"
            value={modalPart?.part_kind}
          >
            {#each PART_TYPES as type}
              <option value={type}>{type}</option>
            {/each}
          </Select>
          <Error
            fieldName="part_kind"
            errorKey="required"
            message="Part Type is required"
          />
        </div>
        <div>
          <Input
            label="Quantity"
            name="quantity"
            type="number"
            value={modalPart?.quantity}
          />
          <Error
            fieldName="quantity"
            errorKey="required"
            message="Quantity is required"
          />
        </div>
      </div>
      <hr class="m-2" />
      <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <Button color="blue-500" type="submit">Save</Button>
        <Button
          color="gray-400"
          on:click={() => getModal("part_edit_modal").close("")}>Cancel</Button
        >
      </div>
    </Form>
  </div>
</Modal>
