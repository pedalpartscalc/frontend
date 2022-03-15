<script>
  export let color = "red-600";
  export let type = "button";

  const hoverColor = color.slice(0, -3) + `${parseInt(color.slice(-3)) + 100}`;

  const classes = `w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-${color} text-base font-medium text-white hover:bg-${hoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color} sm:ml-3 sm:w-auto sm:text-sm`;
</script>

<button class={classes} {type} on:click>
  <slot />
</button>
