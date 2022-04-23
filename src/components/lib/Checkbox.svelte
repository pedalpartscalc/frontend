<script lang="ts">
  import { getContext } from "svelte";

  export let value = "";
  export let name;
  const { onBlur } = getContext("form");

  const classes =
    "w-6 h-6 mx-4 rounded border-2 border-gray-700 focus:ring-transparent";
</script>

<input type="checkbox" {name} class={classes} bind:value on:blur={onBlur} />
