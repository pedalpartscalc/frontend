<!-- Select.svelte -->
<script lang="ts">
  import { getContext } from "svelte";
  export let label;
  export let name;
  const { onBlur } = getContext("form");
</script>

<label for={name}>{label}</label>
<select {name} on:blur={onBlur}>
  <slot />
</select>
