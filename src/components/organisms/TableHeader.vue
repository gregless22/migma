<template>
  <thead class="">
    <tr>
      <th class="border bg-gray-100 text-gray-600 border-gray-200">
        <a-checkbox @click="click"></a-checkbox>
      </th>
      <th
        v-for="h in headers"
        :key="h.header"
        class="px-6 align-middle border py-3 text-xs uppercase border-r-0 bg-gray-100 text-gray-600 border-gray-200 whitespace-no-wrap font-semibold text-left"
      >
        {{ h.header }}
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    headers: {
      type: Array as () => Array<object>
    }
  }
});
</script>
