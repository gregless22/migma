<template>
  <input
    class="form-checkbox h-5 w-5 text-blue-600 rounded ease-linear transition-all duration-150"
    type="checkbox"
    @click="click"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Checkbox"
});
</script>
