<template>
  <div
    class="rounded-t justify-between flex flex-wrap items-center mb-0 px-4 border-0 w-full"
  >
    <div class="relative inline-flex h-16">
      <h3 class="font-semibold text-lg my-4 text-gray-800 fixed">
        {{ title }}
      </h3>
    </div>
    <div class="">
      <ul class="flex text-black">
        <li class="ml-5 px-2 py-1"><a href="">Excel</a></li>
        <li class="ml-5 px-2 py-1"><a href="">Connect Us</a></li>
        <li class="ml-5 px-2 py-1"><a href="">Skillset</a></li>
        <li class="ml-5 px-2 py-1"><a href="">Projects</a></li>
        <li
          class="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800"
        >
          <a href="">Subscribe</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Title"
    }
  }
});
</script>
