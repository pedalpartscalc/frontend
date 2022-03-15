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
      <input {name} {type} {value} on:blur={onBlur} />
    </div>
  </div>
{:else}
  <input class="mx-2" {name} {type} {value} on:blur={onBlur} />
{/if}
