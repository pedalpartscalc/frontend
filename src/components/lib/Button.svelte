<script>
  /**
   * @event {{ nativeEvent: MouseEvent }} click
   */
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let color = "red-600";
  const hoverColor = color.slice(0, -3) + `${parseInt(color.slice(-3)) + 100}`;

  const classes = `w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-${color} text-base font-medium text-white hover:bg-${hoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color} sm:ml-3 sm:w-auto sm:text-sm`;
</script>

<button class={classes} on:click={(e) => dispatch("click", { nativeEvent: e })}>
  <slot />
</button>
