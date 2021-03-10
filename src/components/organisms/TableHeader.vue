<template>
  <thead>
    <tr>
      <!-- Need this for the space for the checkbox -->
      <th
        class="sticky top-0 z-20 text-gray-700 bg-gray-300 border border-gray-400"
      ></th>
      <!-- TODO transition group can do with some work-->
      <transition-group name="tableHeader">
        <th
          v-for="h in headers"
          :key="h.header"
          class="sticky top-0 z-10 max-w-lg px-6 py-3 text-xs font-semibold text-center text-gray-700 uppercase whitespace-no-wrap align-middle transition-all duration-150 ease-linear bg-gray-300 border border-gray-400"
        >
          {{ h.header }}
        </th>
      </transition-group>
    </tr>
  </thead>
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
  }
};
</script>
