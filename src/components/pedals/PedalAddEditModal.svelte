<script lang="ts">
  import { derived, writable, Readable } from "svelte/store";
  import _ from "lodash";

  import {
    Pedal,
    RequiredPart,
    PEDAL_KINDS,
    PART_TYPES,
    NewRequiredPart,
    NewPedal,
  } from "../../types";
  import {
    Validators,
    Form,
    Input,
    Error,
    Select,
    Modal,
    Loader,
    Button,
  } from "../lib";
  import { getModal } from "../lib/Modal.svelte";
  import { pedals, modalPedal } from "../../store";
  import {
    createPedal,
    updatePedal,
    createRequiredPart,
    deleteRequiredPart,
  } from "../../services/api";
  import TextButton from "../lib/TextButton.svelte";

  const isLoading = writable(false);
  const generalError = writable(null);

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

  const startingRequiredParts: Readable<RequiredPart[]> = derived(
    modalPedal,
    ($modalPedal) => $modalPedal?.required_parts ?? []
  );

  const existingRequiredParts: Readable<RequiredPartsInput[] | null> = derived(
    modalPedal,
    ($modalPedal) =>
      $modalPedal?.required_parts?.map((p) => ({
        name: p.part_name,
        kind: p.part_kind,
        quantity: p.quantity.toString(),
      }))
  );

  const emptyRequiredPart: RequiredPartsInput = {
    name: "",
    kind: "",
    quantity: "1",
  };

  let parts = $existingRequiredParts || [emptyRequiredPart];

  let highlightedParts = [];

  const findMatches = (names) => {
    const matches = [];
    if (names.length < 2) return matches;
    for (let i = 1; i < names.length; i++) {
      if (
        names[i] === names[i - 1] &&
        !matches.includes(names[i]) &&
        names[i] !== ""
      ) {
        matches.push(names[i]);
      }
    }
    return matches;
  };

  $: highlightedParts = findMatches(
    parts.map((p) => p.name.toLowerCase()).sort()
  );

  existingRequiredParts.subscribe((p) => {
    if (p) {
      parts = p;
    } else {
      parts = [emptyRequiredPart];
    }
  });

  const addInput = () => {
    parts = [...parts, { name: "", kind: "", quantity: "1" }];
  };

  const deletePart = (id: number) => {
    parts = parts.filter((p, i) => i !== id);
  };

  const formDataToParts = (data: any): NewRequiredPart[] => {
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
        partsData[partNum][partKey] = (v as String).trim();
      }
    }

    return Object.values(partsData);
  };

  const fullPartToNew = (p: RequiredPart): NewRequiredPart => {
    return {
      part_name: p.part_name,
      part_kind: p.part_kind,
      quantity: p.quantity,
    };
  };

  const fullPedalToNew = (p: Pedal): NewPedal => {
    return {
      name: p.name,
      kind: p.kind,
      build_doc_link: p.build_doc_link,
    };
  };

  const saveToApi = async (data) => {
    // update local store
    pedals.update((p) => {
      const idx = p.findIndex((pedal) => pedal.id === $modalPedal?.id);
      p[idx] = data; // TODO: serialize the pedal data properly here
      return p;
    });

    const apiRequests = [];

    // hit API
    const pedalData: NewPedal = {
      name: data.name.trim(),
      kind: data.kind.trim(),
      build_doc_link: data.build_doc_link.trim(),
    };
    if (!_.isEqual(pedalData, fullPedalToNew($modalPedal))) {
      apiRequests.push(updatePedal($modalPedal.id, pedalData));
    }

    // For the bulk update to required parts:
    // - delete any parts that don't match exactly in the form
    // - create any parts in the form that don't match the existing parts
    const partsData = formDataToParts(data);
    for (const e of $startingRequiredParts) {
      const idx = partsData.findIndex((p) => _.isEqual(p, fullPartToNew(e)));
      if (idx === -1) {
        console.log(`Deleting part ${JSON.stringify(fullPartToNew(e))}`);
        apiRequests.push(deleteRequiredPart($modalPedal.id, e.id));
      }
    }

    for (const n of partsData) {
      const idx = $startingRequiredParts.findIndex((p) =>
        _.isEqual(fullPartToNew(p), n)
      );
      if (idx === -1) {
        apiRequests.push(createRequiredPart($modalPedal.id, n));
      }
    }

    await Promise.all(apiRequests);
  };

  const createNewPedal = async (data) => {
    const pedalData: NewPedal = {
      name: data.name.trim(),
      kind: data.kind.trim(),
      build_doc_link: data.build_doc_link.trim(),
    };

    pedals.update((p) => [...p, pedalData]);
    const pedalId = await createPedal(pedalData);

    const partsData = formDataToParts(data);
    for (const p of partsData) {
      await createRequiredPart(pedalId, p);
    }
  };

  const onSubmit = async (e) => {
    if (e?.detail?.valid) {
      generalError.set(null);
      isLoading.set(true);
      const data = e?.detail?.data;
      if (!data) return;

      console.log(data);
      for (const [k, v] of Object.entries(data)) {
        if (v === "" && k !== "build_doc_link") {
          isLoading.set(false);
          generalError.set(
            "All fields must be filled out for the required parts."
          );
          return;
        }
      }

      if (!$modalPedal) {
        await createNewPedal(data);
      } else {
        await saveToApi(data);
      }

      modalPedal.set(null);
      isLoading.set(false);
      getModal("pedal_edit_modal").close("");
    } else {
      console.log("Invalid Form");
    }
  };

  const onCancel = () => {
    modalPedal.set(null);
    isLoading.set(false);
    getModal("pedal_edit_modal").close("");
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
        <Input label="Name" name="name" value={$modalPedal?.name ?? ""} />
        <Error
          fieldName="name"
          errorKey="required"
          message="Name is required"
        />
        <Select label="Pedal Type" name="kind" value={$modalPedal?.kind}>
          {#each PEDAL_KINDS as kind}
            <option value={kind}>{kind}</option>
          {/each}
        </Select>
        <Input
          label="Build Doc Link"
          name="build_doc_link"
          value={$modalPedal?.build_doc_link ?? ""}
        />
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
        {#each parts as part, i}
          <div
            class="flex flex-row justify-around gap-2"
            class:highlighted={highlightedParts.includes(part.name)}
          >
            <Input name={`part_name_${i}`} bind:value={part.name} />
            <Select name={`part_kind_${i}`} value={part.kind}>
              {#each PART_TYPES as kind}
                <option value={kind}>{kind}</option>
              {/each}
            </Select>
            <Input name={`quantity_${i}`} type="number" value={part.quantity} />
            <TextButton
              on:click={() => {
                deletePart(i);
              }}>Delete</TextButton
            >
          </div>
        {/each}
      </div>

      {#if !!$generalError}
        <div class="mx-auto mt-4 mb-2">
          <p class="text-red-600">{$generalError}</p>
        </div>
      {/if}

      <div class="flex flex-row justify-center mt-4">
        <Button color="blue-500" on:click={addInput}>Add Part</Button>
      </div>

      <hr class="mx-2 mt-4" />

      <div class="mx-auto px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        {#if $isLoading}
          <div class="mx-4">
            <Loader />
          </div>
        {:else}
          <Button color="blue-500" type="submit">Save</Button>
        {/if}
        <Button color="gray-400" on:click={onCancel}>Cancel</Button>
      </div>
    </div>
  </Form>
</Modal>

<style>
  .highlighted {
    background-color: rgba(255, 0, 0, 0.3);
  }
</style>
