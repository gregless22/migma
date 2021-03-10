<template>
  <tbody class="mt-12">
    <tr v-for="item in content" :key="item.id" class="even:bg-gray-100 ">
      <th
        class="sticky left-0 z-20 px-2 bg-white border border-gray-300 top-12 even:bg-gray-100"
      >
        <a-checkbox v-model="item['selected']"></a-checkbox>
      </th>
      <transition-group name="tableData">
        <td
          v-for="(header, j) in headers"
          :key="j"
          class="items-center p-2 px-6 text-xs text-left whitespace-no-wrap align-middle transition-all duration-150 ease-linear border"
          :class="[header.freeze === true ? 'fixed' : 'relative']"
        >
          <slot :name="header.value" :item="item">
            {{ getValue(item, header) }}
          </slot>
        </td>
      </transition-group>
    </tr>
  </tbody>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    content: { type: Array },
    headers: {
      type: Array,
      required: true
    }
  },
  computed: {
    // getValue() {
    //   return "the item";
    // }
  },
  methods: {
    getValue(item, header) {
      for (let i = 0; i < header.value.length; i++) {
        item = item[header.value[i]];
      }
      return item;
    }
  }
};
</script>
