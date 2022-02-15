<script>
  import { onMount } from "svelte";
  import Part from "./Part.svelte";
  // define the data holding variable
  let parts;

  onMount(async () => {
    await fetch(`http://localhost:8000/parts`)
      .then((r) => r.json())
      .then((data) => {
        parts = data;
      });
  });
</script>

{#if parts}
  {#each parts as part}
    <div class="container mx-auto">
      <Part {part} />
    </div>
  {/each}
{:else}
  <p class="loading">loading...</p>
{/if}
