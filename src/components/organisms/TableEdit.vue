<template>
  <tr>
    <td :colspan="columns" class="sticky top-auto z-20">
      <p class="inline-flex p-1 mb-2">Edit data for all selected</p>
      <a-button class="inline-block">Save Changes</a-button>
    </td>
  </tr>
  <tr class="p-16">
    <!-- Need this for the space for the checkbox -->
    <td class="sticky top-0 z-10 text-gray-700 bg-white"></td>
    <!-- TODO transition group can do with some work-->
    <transition-group name="tableHeader">
      <td
        v-for="h in headers"
        :key="h.header"
        class="sticky top-0 z-10 px-1 py-3 text-xs font-semibold text-left text-gray-700 uppercase whitespace-no-wrap align-bottom transition-all duration-150 ease-linear bg-white"
      >
        <input
          type="text"
          class="block w-full p-2 border rounded"
          :placeholder="h.header"
        />
      </td>
    </transition-group>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      selectAll: false
    };
  },
  props: {
    headers: {
      type: Array
    }
  },
  methods: {
    change() {
      console.log("Event HEre", this.selectAll);
    }
  },
  computed: {
    columns() {
      return this.headers.length;
    }
  }
};
</script>
