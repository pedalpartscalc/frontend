<script lang="ts">
  import { getContext } from "svelte";
  export let label = null;
  export let name;
  export let value = null;
  const { onBlur } = getContext("form");

  const classes =
    "shadow appearance-none rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline";
</script>

{#if !!label}
  <div class="flex flex-row justify-between content-center gap-4 min-w-full">
    <div class="my-auto">
      <label for={name}>{label}</label>
    </div>
    <div>
      <select class={classes} {name} {value} on:blur={onBlur}>
        <slot />
      </select>
    </div>
  </div>
{:else}
  <select class={classes} {name} {value} on:blur={onBlur}>
    <slot />
  </select>
{/if}
