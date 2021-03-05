<template>
  <o-table-title class="mt-6" :title="title"></o-table-title>
  <div
    class="relative border-gray-200 flex flex-col min-w-0 break-words w-full shadow-lg rounded overflow-x-auto flex-nowrap"
  >
    <div>
      <table class="items-center bg-transparent border-collapse table-auto">
        <!-- v-for="item in items"
      :key="item" -->
        <o-table-header :headers="headers"></o-table-header>
        <o-table-body :content="content" :headers="headers">
          <template v-slot:id="{ item }" class="absolute">
            {{ item.id }}</template
          >
        </o-table-body>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      selected: [2]
    };
  },
  props: {
    title: String,
    headers: { type: Array as () => Array<object> },
    content: { type: Array as () => Array<object> }
  },
  computed: {}
});
</script>
