<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mt-6 shadow-lg rounded bg-white overflow-x-auto flex-nowrap"
  >
    <o-table-title :title="title"></o-table-title>
    <table class="items-center bg-transparent border-collapse table-auto">
      <!-- v-for="item in items"
      :key="item" -->
      <o-table-header :headers="headers"></o-table-header>
      <o-table-body :content="content" :headers="headers">
        <template v-slot:make>Into the mkae column</template>
        <template v-slot:model>Into the model column</template>
        <template v-slot:component="{ item }"
          ><m-table-data-status :label="item.make"></m-table-data-status
        ></template>
      </o-table-body>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      headers: [
        {
          header: "TEST",
          value: "make"
        },
        {
          header: "TEST2",
          value: "model"
        },
        {
          header: "TEST3",
          value: "component"
        }
      ],

      content: [
        {
          model: "TEST",
          make: "make"
        },
        {
          model: "sadasf",
          make: "masgdfke"
        }
      ]
    };
  },
  props: {
    title: String,
    items: { type: Array as () => Array<object> }
  },
  computed: {
    // columnTitles() {
    //   return this.items.forEach(e => {
    //     return e.title;
    //   });
    // }
  }
});
</script>
