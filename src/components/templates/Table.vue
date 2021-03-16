<template>
  <div class="w-full h-full">
    <o-table-title
      class="w-full mt-6 bg-white"
      :headers="headers"
      :title="title"
    ></o-table-title>

    <div
      class="flex flex-col w-full min-w-0 overflow-x-auto break-words border-gray-200 rounded shadow-lg overscroll-none h-90 flex-nowrap"
    >
      <table
        class="items-center w-full bg-transparent border-collapse table-auto"
      >
        <o-table-header :headers="displayHeaders"></o-table-header>

        <o-table-body
          :content="flatContent"
          :headers="displayHeaders"
          :selected="selected"
        >
          <template v-slot:id="{ item }" class="absolute">
            {{ item.id }}</template
          >
        </o-table-body>
        <o-table-edit
          :headers="displayHeaders"
          :hidden="selected.length > 0 ? false : true"
          @delete-selected="$emit('delete-selected')"
          @update-selected="$emit('update-selected', $event)"
        ></o-table-edit>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["delete-selected", "update-selected", "update:selected"],
  data() {
    return {
      tableSelected: this.selected
    };
  },
  props: {
    title: String,
    headers: { type: Array },
    content: { type: Array },
    selected: { type: Array }
  },
  methods: {},
  computed: {
    displayHeaders() {
      return this.headers.filter(e => e.display);
    },
    noneSelected() {
      return !this.content.some(e => e.selected);
    },
    selectedContent() {
      return this.content.filter(e => e.selected);
    },
    flatContent() {
      return this.content.map(e => {
        return this.$flat.flatten(e);
      });
    }
  }
};
</script>
