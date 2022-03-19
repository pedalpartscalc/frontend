<script lang="ts">
  export let type = "button";
</script>

<button class="px-2 border-none text-ppc hover:text-ppc-light" {type} on:click>
  <slot />
</button>
