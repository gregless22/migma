<template>
  <input
    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    :type="type"
    :id="name"
    :placeholder="placeholder"
    v-model="value"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      value: this.modelValue
    };
  },
  name: "TextField",
  props: {
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: {
    "update:modelValue": null
  }
});
</script>
