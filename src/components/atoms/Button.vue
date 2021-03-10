<template>
  <button
    class="relative z-10 flex items-center px-2 py-1 transition-all duration-100 ease-linear border rounded"
    :class="[
      disabled
        ? 'text-gray-800 bg-gray-300 border border-gray-600  focus:outline-none cursor-default'
        : 'text-white bg-blue-600 border border-blue-600  focus:outline-none hover:bg-white hover:text-blue-600'
    ]"
    :disabled="disabled"
  >
    <div class="self-center mr-2 text-sm" :class="[icon]"></div>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    color: {
      type: String,
      default: "blue"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String
  }
});
</script>
