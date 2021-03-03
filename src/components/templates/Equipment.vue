<template>
  <o-card-table title="Equipment List" :headers="headers"></o-card-table>
</template>

<script lang="ts">
export default {
  data() {
    return {
      headers: ["Tag", "Area", "System", "Make", "Model", "Description"],
      equipment: []
    };
  },
  created() {
    console.log(this);
    // this.$axios.get("/equipment");
    console.log(this.$attrs);
  }
};
</script>
