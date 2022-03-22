<script lang="ts">
  export let color = null;
  export let type = "button";

  let classes = `w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`;
  if (color) {
    const hoverColor =
      color.slice(0, -3) + `${parseInt(color.slice(-3)) + 100}`;
    classes += ` bg-${color} hover:bg-${hoverColor}`;
  } else {
    classes += "text-gradient bg-gradient-l-orange-dark";
  }
</script>

<button class={classes} {type} on:click>
  <slot />
</button>
