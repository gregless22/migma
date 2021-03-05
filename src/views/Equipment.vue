<template>
  <t-table
    title="Equipment List"
    :content="equipment"
    :headers="headers"
  ></t-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      equipment: [],
      headerSelect: []
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
        {
          header: "ID",
          value: ["id"]
          // freeze: true TODO
        },
        {
          header: "Tag",
          value: ["areaDetails", "tag"]
        },
        {
          header: "Area",
          value: ["areaDetails", "area"]
        },
        {
          header: "System",
          value: ["areaDetails", "system"]
        },
        {
          header: "Area Description",
          value: ["areaDetails", "description"]
        },
        {
          header: "Drawings",
          value: [""]
        },
        {
          header: "Make",
          value: ["equipmentDetails", "make"]
        },
        {
          header: "Model",
          value: ["equipmentDetails", "model"]
        },
        {
          header: "Serial",
          value: ["equipmentDetails", "serialNumber"]
        },
        {
          header: "Protection",
          value: ["equipmentDetails", "protection"]
        },
        {
          header: "Group",
          value: ["equipmentDetails", "gasGroup"]
        },
        {
          header: "Temp Class",
          value: ["equipmentDetails", "tempClass"]
        },
        {
          header: "IP",
          value: ["equipmentDetails", "equipmentIP"]
        },
        {
          header: "COC",
          value: ["equipmentDetails", "coc"]
        },
        {
          header: "Risk Rating",
          value: ["equipmentDetails", "riskRating"]
        },
        {
          header: "MDP",
          value: ["equipmentDetails", "mdp"]
        },
        {
          header: "Voltage",
          value: ["equipmentDetails", "voltage"]
        },
        {
          header: "FLC",
          value: ["equipmentDetails", "flc"]
        },
        {
          header: "Design Terminals",
          value: ["equipmentDetails", "designTerminals"]
        },
        {
          header: "Classification",
          value: ["equipmentDetails", "classification"]
        },
        {
          header: "Comments",
          value: ["equipmentDetails", "comments"]
        },
        {
          header: "Barriers",
          value: ["equipmentDetails", "barriers"]
        },
        {
          header: "Fittings",
          value: ["equipmentDetails", "fittings"]
        },
        {
          header: "Inpsections",
          value: [""]
        }
      ];

      return headers;
    }
  }
});
</script>
