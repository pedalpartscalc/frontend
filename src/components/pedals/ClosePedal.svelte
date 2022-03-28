<script lang="ts">
  import type { ClosePedal } from "../../types";
  import { TextButton } from "../lib";

  export let pedal: ClosePedal;
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
    <TextButton>Parts List</TextButton>
  </td>
</tr>
