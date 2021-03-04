<template>
  <tbody>
    <tr v-for="(item, i) in content" :key="i" class="border-t-2">
      <td
        v-for="(header, j) in headers"
        :key="j"
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-2 text-left items-center"
      >
        <slot :name="header.value" :item="item">
          {{ item }}
        </slot>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    content: { type: Array as () => Array<object> },
    headers: {
      type: Array as () => Array<string>,
      required: true
    }
  },
  computed: {
    // attribute(item: object, header: object): string {
    //   return item[`${header.value}`];
    // }
  }
});
</script>
