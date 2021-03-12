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
import { Equipment, headers } from "@/models/Equipment";
export default {
  data() {
    return {
      equipment: [],
      headerSelect: [],
      headers: headers,
      newequipment: new Equipment({})
    };
  },
  created() {
    this.$axios
      .get("/equipments")
      .then(resp =>
        resp.data.forEach(e => this.equipment.push(new Equipment(e)))
      )
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
  },
  computed: {}
};
</script>
