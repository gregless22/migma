<template>
  <t-table title="Equipment List" :items="items"></t-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      equipment: [],
      details: 1,
      items: [
        {
          header: "TEST",
          data: ["test data", "second"],
          object: { data: "Hello", id: "123" }
        },
        {
          header: "TEST2",
          data: ["test data2"],
          component: "o-table-data-status"
        }
      ]
    };
  },
  created() {
    this.$axios
      .get("/equipments")
      .then(resp => (this.equipment = resp.data))
      .catch(err => console.log(err));
  },
  computed: {
    headers() {
      const headers = [
        "Tag",
        "Description",
        "Area",
        "System",
        "Inpspection Status",
        "Inpsection Date",
        "Inpsection Due",
        "Inpsection Type"
      ];
      switch (this.details) {
        case 0:
          return headers;
        case 1:
          headers.push("Make", "Model", "Certificate");
          return headers;
        default:
          return ["testing"];
      }
    }
  }
});
</script>
