<script lang="ts">
  import type { ClosePedal } from "../../types";
  import { TextButton } from "../lib";
  import { getModal } from "../lib/Modal.svelte";
  import { modalClosePedal, modalBuildPedal } from "../../store";

  export let pedal: ClosePedal;

  const onOpen = () => {
    modalClosePedal.set(pedal);
    getModal("close_pedal_parts").open(() => {
      modalClosePedal.set(null);
    });
  };

  const onBuildOpen = () => {
    modalBuildPedal.set(pedal);
    getModal("build_pedal_parts").open(() => {
      modalBuildPedal.set(null);
    });
  };
</script>

<tr>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm font-medium text-gray-900">
      {pedal.name}
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">{pedal.kind}</div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    {pedal?.short_parts?.length ?? 0}
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    <TextButton on:click={onOpen}>Parts List</TextButton>
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    <TextButton on:click={onBuildOpen}>Parts Checklist</TextButton>
  </td>
</tr>
