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
  <div
    id="modal"
    class="flex items-center justify-center"
    on:click|stopPropagation={() => {}}
  >
    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-auto sm:my-8 sm:align-middle"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <slot />
      </div>
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
    background: #444;
    margin: auto;
    overflow: auto;
  }

  .visible {
    visibility: visible !important;
  }
</style>
