<template>
  <div
    class="bg-white rounded-lg overflow-hidden shadow-lg p-8 border border-gray-800"
  >
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
