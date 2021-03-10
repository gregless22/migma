<template>
  <t-table
    title="Equipment List"
    :content="equipment"
    :headers="headers"
    @delete-selected="deleteEquipment"
    @update-selected="updateEquipment"
  ></t-table>
</template>

<script>
export default {
  data() {
    return {
      equipment: [],
      headerSelect: [],
      headers: [
        {
          header: "ID",
          value: ["id"],
          display: true
        },
        {
          header: "Tag",
          value: ["areaDetails", "tag"],
          display: true
        },
        {
          header: "Area",
          value: ["areaDetails", "area"],
          display: true
        },
        {
          header: "System",
          value: ["areaDetails", "system"],
          display: true
        },
        {
          header: "Area Description",
          value: ["areaDetails", "description"],
          display: true
        },
        {
          header: "Drawings",
          value: [""],
          display: true
        },
        {
          header: "Make",
          value: ["equipmentDetails", "make"],
          display: true
        },
        {
          header: "Model",
          value: ["equipmentDetails", "model"],
          display: true
        },
        {
          header: "Serial",
          value: ["equipmentDetails", "serialNumber"],
          display: true
        },
        {
          header: "Protection",
          value: ["equipmentDetails", "protection"],
          display: true
        },
        {
          header: "Group",
          value: ["equipmentDetails", "gasGroup"],
          display: true
        },
        {
          header: "Temp Class",
          value: ["equipmentDetails", "tempClass"],
          display: true
        },
        {
          header: "IP",
          value: ["equipmentDetails", "equipmentIP"],
          display: true
        },
        {
          header: "COC",
          value: ["equipmentDetails", "coc"],
          display: true
        },
        {
          header: "Risk Rating",
          value: ["equipmentDetails", "riskRating"],
          display: true
        },
        {
          header: "MDP",
          value: ["equipmentDetails", "mdp"],
          display: true
        },
        {
          header: "Voltage",
          value: ["equipmentDetails", "voltage"],
          display: true
        },
        {
          header: "FLC",
          value: ["equipmentDetails", "flc"],
          display: true
        },
        {
          header: "Design Terminals",
          value: ["equipmentDetails", "designTerminals"],
          display: true
        },
        {
          header: "Classification",
          value: ["equipmentDetails", "classification"],
          display: true
        },
        {
          header: "Comments",
          value: ["equipmentDetails", "comments"],
          display: true
        },
        {
          header: "Barriers",
          value: ["equipmentDetails", "barriers"],
          display: true
        },
        {
          header: "Fittings",
          value: ["equipmentDetails", "fittings"],
          display: true
        },
        {
          header: "Inpsections",
          value: [""],
          display: true
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
  methods: {
    deleteEquipment(e) {
      // need to make a copy of the array.  Otherwise it ruins the async and deletes before looping throught the array
      const equipmentCopy = this.equipment.map(e => e);

      equipmentCopy.forEach(element => {
        if (element.selected) {
          this.$axios
            .delete(`/equipment/${element.id}`)
            .then(() => {
              this.equipment.find((e, i, a) => {
                if (e.id == element.id) {
                  a.splice(i, 1);
                  return true;
                }
              });
              this.$toast("Equipment has been removed", {
                type: "success"
              });
            }) //TODO delete from the array
            .catch(err => {
              this.$toast(err, {
                type: "error"
              });
            });
        }
      });

      console.log(this.equipment.filter(e => e.selected));
      console.log("yes it propagates", e);
    },
    updateEquipment(e) {
      console.log("yes it is here", e);
    }
  }
};
</script>
