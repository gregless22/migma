<template>
  <button
    class="bg-transparent w-full hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded ease-linear transition-all duration-150"
    type="button"
  >
    <slot name="icon"></slot>
    <div>
      <slot name="default"></slot>
    </div>
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
    }
  }
});
</script>
