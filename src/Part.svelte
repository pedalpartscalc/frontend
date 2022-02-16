<script>
  export let part;
  export let openModal;

  import { getContext } from "svelte";
  // import { modal } from "./store";
  import PartEditContent from "./PartEditModal.svelte";
</script>

<tr>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm font-medium text-gray-900">
      {part.part_name}
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">{part.part_kind}</div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    {part.quantity}
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <button
      on:click={openModal(part)}
      class="text-indigo-600 hover:text-indigo-900">Edit</button
    >
  </td>
</tr>
