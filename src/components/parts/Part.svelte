<script>
  import { availableParts } from "../../store";
  import { deleteAvailablePart } from "../../services/api";
  import TextButton from "../lib/TextButton.svelte";

  export let part;
  export let openModal;

  const deletePart = async () => {
    if (!part) {
      console.log("No part selected");
      return;
    }
    availableParts.update((parts) => {
      return parts.filter((p) => p.id !== part.id);
    });
    await deleteAvailablePart(part.id);
  };
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
    <TextButton on:click={openModal(part)}>Edit</TextButton>
    <TextButton on:click={deletePart}>Delete</TextButton>
  </td>
</tr>
