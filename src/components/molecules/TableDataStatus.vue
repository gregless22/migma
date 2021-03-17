<template>
  <i class="fas fa-circle text-orange-500 mr-2"></i> {{ label }}
</template>

<script">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  props: {
    label: { type: String, default: "Label", required: true }
  }
});
</script>
