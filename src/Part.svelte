<script>
  import { availableParts } from "./store";
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
    await fetch(`http://localhost:8000/parts/${part.id}`, {
      method: "DELETE",
    });
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
    <button
      on:click={openModal(part)}
      class="px-2 border-none text-indigo-600 hover:text-indigo-900"
      >Edit</button
    >
    <button
      on:click={deletePart}
      class="px-2 border-none text-indigo-600 hover:text-indigo-900"
      >Delete</button
    >
  </td>
</tr>
