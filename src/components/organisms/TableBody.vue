<template>
  <tbody>
    <tr
      v-for="(item, i) in content"
      :key="i"
      :class="[i % 2 ? 'bg-gray-100' : 'bg-white']"
    >
      <td class="border px-2" :class="[i % 2 ? 'bg-gray-100' : 'bg-white']">
        <a-checkbox></a-checkbox>
      </td>
      <td
        v-for="(header, j) in headers"
        :key="j"
        class="border px-6 align-middle text-xs whitespace-no-wrap p-2 text-left items-center"
        :class="[header.freeze === true ? 'fixed' : 'relative']"
      >
        <slot :name="header.value" :item="item">
          {{ getValue(item, header) }}
        </slot>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
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
