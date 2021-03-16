<template>
  <tbody class="mt-12">
    <tr v-for="item in content" :key="item.id" class="even:bg-gray-100 ">
      <th
        class="sticky left-0 z-20 px-2 bg-white border border-gray-300 top-12 even:bg-gray-100"
      >
        <a-checkbox
          @change="changeSelected($event.target.checked, item.id)"
        ></a-checkbox>
      </th>
      <transition-group name="tableData">
        <td
          v-for="(header, j) in headers"
          :key="j"
          class="items-center p-2 px-6 text-xs text-left whitespace-no-wrap align-middle transition-all duration-150 ease-linear border"
          :class="[header.freeze === true ? 'fixed' : 'relative']"
        >
          <slot :name="header.value" :item="item">
            {{ item[`${header.value}`] }}
          </slot>
        </td>
      </transition-group>
    </tr>
  </tbody>
</template>

<script>
export default {
  emits: ["selected"],
  data() {
    return {
      toggled: this.selected
    };
  },
  props: {
    content: { type: Array },
    headers: {
      type: Array,
      required: true
    },
    selected: {
      type: Array
    }
  },
  computed: {},
  methods: {
    changeSelected(value, i) {
      if (value) {
        this.toggled.push(i);
      } else {
        this.toggled.find((e, j) => {
          if (e == i) {
            this.toggled.splice(j, 1);
          }
        });
      }
    }
  }
};
</script>
