<script lang="ts">
  import { Pedal } from "../../types";

  export let pedal: Pedal;
  export let openModal;

  // maybe eventually add a pedal deletion thing, but need to add an "are you sure?" thing first
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
    {pedal?.required_parts?.length ?? 0}
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <button
      on:click={openModal(pedal)}
      class="px-2 border-none text-indigo-600 hover:text-indigo-900"
      >Edit</button
    >
    <!-- <button
      on:click={deletePart}
      class="px-2 border-none text-indigo-600 hover:text-indigo-900"
      >Delete</button
    > -->
  </td>
</tr>
