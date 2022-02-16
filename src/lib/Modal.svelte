<script context="module" lang="ts">
  let onTop; //keeping track of which open modal is on top
  const modals = {}; //all modals get registered here for easy future access

  /// Fetch a Modal by its ID
  export function getModal(id = "") {
    return modals[id];
  }
</script>

<script lang="ts">
  import { onDestroy } from "svelte";

  let topDiv;
  let visible = false;
  let prevOnTop;
  let closeCallback;

  export let id = "";

  function keyPress(ev) {
    //only respond if the current modal is the top one
    if (ev.key == "Escape" && onTop == topDiv) close(""); //ESC
  }

  /// Opens the modal
  function open(callback) {
    closeCallback = callback;
    if (visible) return;
    prevOnTop = onTop;
    onTop = topDiv;
    window.addEventListener("keydown", keyPress);

    //this prevents scrolling of the main window on larger screens
    document.body.style.overflow = "hidden";

    visible = true;
    //Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
    document.body.appendChild(topDiv);
  }

  /// Closes the modal and optionally returns a value
  function close(retVal) {
    if (!visible) return;
    window.removeEventListener("keydown", keyPress);
    onTop = prevOnTop;
    if (onTop == null) document.body.style.overflow = "";
    visible = false;
    if (closeCallback) closeCallback(retVal);
  }

  modals[id] = { open, close };

  onDestroy(() => {
    delete modals[id];
    window.removeEventListener("keydown", keyPress);
  });
</script>

<div id="topModal" class:visible bind:this={topDiv} on:click={() => close("")}>
  <div id="modal" on:click|stopPropagation={() => {}}>
    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <slot />
      </div>
      <!-- <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          on:click={() => close("")}>Deactivate</button
        >
        <button
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          on:click={() => close("")}>Cancel</button
        >
      </div> -->
    </div>
  </div>
</div>

<style>
  #topModal {
    visibility: hidden;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #4448;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .visible {
    visibility: visible !important;
  }
</style>
