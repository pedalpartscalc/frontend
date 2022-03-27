<script lang="ts">
  import { getContext } from "svelte";
  export let type = "text";
  export let label = null;
  export let name;
  export let value: string = "";
  const { onBlur } = getContext("form");

  const classes =
    "shadow appearance-none rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline";
</script>

{#if !!label}
  <div class="flex flex-row justify-between content-center gap-4">
    <div class="my-auto">
      <label for={name}>{label}</label>
    </div>
    <div>
      {#if type === "text"}
        <input class={classes} {name} type="text" bind:value on:blur={onBlur} />
      {:else}
        <input class={classes} {name} {type} {value} on:blur={onBlur} />
      {/if}
    </div>
  </div>
{:else if type === "text"}
  <input class={classes} {name} type="text" bind:value on:blur={onBlur} />
{:else}
  <input class={classes} {name} {type} {value} on:blur={onBlur} />
{/if}
