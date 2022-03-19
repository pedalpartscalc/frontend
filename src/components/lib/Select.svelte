<script lang="ts">
  import { getContext } from "svelte";
  export let label = null;
  export let name;
  export let value = null;
  const { onBlur } = getContext("form");
</script>

{#if !!label}
  <div class="flex flex-row justify-between">
    <div>
      <label for={name}>{label}</label>
    </div>
    <div>
      <select {name} {value} on:blur={onBlur}>
        <slot />
      </select>
    </div>
  </div>
{:else}
  <select class="mx-2" {name} {value} on:blur={onBlur}>
    <slot />
  </select>
{/if}
