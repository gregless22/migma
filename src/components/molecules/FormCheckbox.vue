<template>
  <a-checkbox></a-checkbox>
  <span class="ml-2 text-gray-800 text-sm">{{ label }}</span>
</template>

<script">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    label: {
      type: String
    }
  }
});
</script>
