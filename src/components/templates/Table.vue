<template>
  <div class="w-full h-full">
    <o-table-title
      class="w-full mt-6 bg-white"
      :headers="headers"
      :title="title"
      :buttonDisabled="noneSelected"
      @delete-selected="$emit('delete-selected', $event)"
      @update-selected="$emit('update-selected', $event)"
    ></o-table-title>

    <div
      class="flex flex-col w-full min-w-0 overflow-x-auto break-words border-gray-200 rounded shadow-lg overscroll-none h-90 flex-nowrap"
    >
      <table
        class="items-center w-full bg-transparent border-collapse table-auto"
      >
        <o-table-header :headers="displayHeaders"></o-table-header>
        <!-- <o-table-edit :headers="displayHeaders"></o-table-edit> -->
        <o-table-body :content="content" :headers="displayHeaders">
          <template v-slot:id="{ item }" class="absolute">
            {{ item.id }}</template
          >
        </o-table-body>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["delete-selected", "update-selected"],
  data() {
    return {};
  },
  props: {
    title: String,
    headers: { type: Array },
    content: { type: Array }
  },
  computed: {
    displayHeaders() {
      return this.headers.filter(e => e.display);
    },
    noneSelected() {
      return !this.content.some(e => e.selected);
    }
  }
};
</script>
