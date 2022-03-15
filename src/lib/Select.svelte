<script lang="ts">
  import { getContext } from "svelte";
  export let label = null;
  export let name;
  const { onBlur } = getContext("form");
</script>

{#if !!label}
  <div class="flex flex-row justify-between">
    <div>
      <label for={name}>{label}</label>
    </div>
    <div>
      <select {name} on:blur={onBlur}>
        <slot />
      </select>
    </div>
  </div>
{:else}
  <select class="mx-2" {name} on:blur={onBlur}>
    <slot />
  </select>
{/if}
