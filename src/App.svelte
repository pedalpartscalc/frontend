<script lang="ts">
  import AvailableParts from "./AvailableParts.svelte";

  import { getModal } from "./lib/Modal.svelte";
  import PartEditModal from "./PartEditModal.svelte";

  let modalPart;

  function openModal(part) {
    modalPart = part;
    getModal("part_edit_modal").open();
  }
</script>

<main class="container max-w-3xl mx-auto">
  <div class="text-center py-8">
    <h1
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
    >
      Pedal Parts Calculator
    </h1>
    <h3 class="text-lg text-gray-800">
      Find out what guitar pedals you can build with the parts you have on hand.
    </h3>
  </div>

  <AvailableParts {openModal} />
</main>

<PartEditModal {modalPart} />

<!-- <Modal id="second">
  Inner window
  <button class="green" on:click={() => getModal("second").close(1)}>
    Select 1
  </button>
  <button class="green" on:click={() => getModal("second").close(2)}>
    Select 2
  </button>
</Modal> -->
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
