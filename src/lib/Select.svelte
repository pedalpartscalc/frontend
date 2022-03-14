<!-- Select.svelte -->
<script lang="ts">
  import { getContext } from "svelte";
  export let label;
  export let name;
  const { onBlur } = getContext("form");
</script>

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
