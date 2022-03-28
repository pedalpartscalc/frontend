<script lang="ts">
  import { onMount } from "svelte";
  import { getPedal } from "../services/api";

  export let pedalId;
  let pedal;

  const fetchPedal = async () => {
    console.log(pedalId);
    pedal = await getPedal(pedalId);
  };

  onMount(fetchPedal);
</script>

<p>Hello!</p>
