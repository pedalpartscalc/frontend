<script lang="ts">
  export let value = "";

  const classes =
    "w-6 h-6 mx-4 rounded border-2 border-gray-700 focus:ring-transparent";
</script>

<input type="checkbox" class={classes} bind:value />
