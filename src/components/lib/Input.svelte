<script lang="ts">
  import { getContext } from "svelte";
  export let type = "text";
  export let label = null;
  export let name;
  export let value: string = "";
  const { onBlur } = getContext("form");
</script>

{#if !!label}
  <div class="flex flex-row justify-between">
    <div>
      <label for={name}>{label}</label>
    </div>
    <div>
      {#if type === "text"}
        <input {name} type="text" bind:value on:blur={onBlur} />
      {/if}
    </div>
  </div>
{:else if type === "text"}
  <input class="mx-2" {name} type="text" bind:value on:blur={onBlur} />
{:else}
  <input class="mx-2" {name} {type} {value} on:blur={onBlur} />
{/if}
