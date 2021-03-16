<template>
  <tr class="w-full h-12" :class="[hidden ? 'hidden' : '']">
    <td :colspan="columns" class="sticky z-30 w-full px-10 bg-white top-12">
      <div class="sticky content-center max-w-screen-sm pt-2 left-12">
        <div class="sticky max-w-screen-sm left-12">
          <p class="pt-2">
            Edit data for all selected
          </p>
        </div>
      </div>
    </td>
  </tr>
  <tr class="p-16" :class="[hidden ? 'hidden' : '']">
    <!-- Need this for the space for the checkbox -->
    <td class="sticky z-30 text-gray-700 bg-white top-24"></td>
    <!-- TODO transition group can do with some work-->
    <transition-group name="tableHeader">
      <td
        v-for="h in headers"
        :key="h.header"
        class="sticky z-10 px-1 py-3 text-xs font-semibold text-left text-gray-700 uppercase whitespace-no-wrap align-bottom transition-all duration-150 ease-linear bg-white top-24"
      >
        <!-- TODO add slots so can customise the entry -->
        <input
          type="text"
          class="block w-full p-2 border rounded"
          :placeholder="h.header"
          v-model="editedContent[`${h.value}`]"
        />
      </td>
    </transition-group>
  </tr>
  <tr class="w-full h-12" :class="[hidden ? 'hidden' : '']">
    <td :colspan="columns" class="sticky z-30 w-full px-10 bg-white top-12">
      <div class="sticky content-center max-w-screen-sm pt-2 left-12">
        <ul class="flex">
          <li class="pr-2">
            <a-button
              icon="fas fa-trash"
              @click="$emit('delete-selected', $event)"
              color="red"
              >Delete</a-button
            >
          </li>
          <li class="pr-2">
            <a-button icon="fas fa-edit" @click="editContent">Save</a-button>
          </li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  emits: ["delete-selected", "update-selected"],
  data() {
    return {
      selectAll: false,
      editedContent: {}
    };
  },
  props: {
    headers: {
      type: Array
    },
    hidden: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    editContent() {
      this.$emit("update-selected", this.editedContent);
      this.$nextTick((this.editedContent = {}));
    }
  },
  computed: {
    columns() {
      return this.headers.length;
    }
  }
};
</script>
