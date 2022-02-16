<script lang="ts">
  import { getContext } from "svelte";
  export let type = "text";
  export let label;
  export let name;
  export let value: string = "";
  const { onBlur } = getContext("form");
</script>

<label for={name}>{label}</label>
<input {name} {type} {value} on:blur={onBlur} />
