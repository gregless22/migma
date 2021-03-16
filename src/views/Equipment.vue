<template>
  <t-table
    title="Equipment List"
    :content="equipment"
    :headers="headers"
    @delete-selected="deleteEquipment"
    @update-selected="updateEquipment"
    v-model:selected="equipmentSelected"
  ></t-table>
</template>

<script>
import { Equipment, headers } from "@/models/Equipment.js";
export default {
  data() {
    return {
      equipment: [],
      headerSelect: [],
      equipmentSelected: [],
      headers: headers
    };
  },
  created() {
    this.$axios
      .get("/equipments")
      .then(resp =>
        resp.data.forEach(e =>
          this.equipment.push(Object.assign(new Equipment(), e))
        )
      )
      .catch(err => console.log(err));
  },
  methods: {
    deleteEquipment() {
      this.equipmentSelected.forEach(e => {
        this.$axios
          .delete(`/equipment/${e}`)
          .then(() => {
            this.equipment.find((j, i, a) => {
              if (e == j.id) {
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
          })
          .finally(() => {
            this.equipmentSelected.find((f, i, a) => {
              if (e == f) {
                a.splice(i, 1);
                return true;
              }
            });
          });
      });
    },
    updateEquipment(change) {
      this.equipmentSelected.forEach(e => {
        // get a copy of the old one
        const oldEquipment = this.$flat.flatten(
          this.equipment.find(f => f.id == e)
        );

        const newEquipment = this.$flat.unflatten({
          ...oldEquipment,
          ...change
        });

        this.$axios
          .put(`/equipment/${e}`, newEquipment)
          .then(() => {
            this.equipment.find((eq, i) => {
              if (eq.id === e) {
                this.equipment.splice(
                  i,
                  1,
                  Object.assign(new Equipment(), newEquipment)
                );
                return true;
              }
            });
            this.$toast("Equipment has been updated", {
              type: "success"
            });
          }) //TODO delete from the array
          .catch(err => {
            this.$toast(err, {
              type: "error"
            });
          })
          .finally(() => {
            this.equipmentSelected.find((f, i, a) => {
              if (e == f) {
                a.splice(i, 1);
                return true;
              }
            });
          });
      });
    }
  },
  computed: {}
};
</script>
