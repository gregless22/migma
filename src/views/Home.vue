<template>
  <div
    class="absolute top-0 w-full h-full bg-gray-800"
    :style="`background-image: url('${background}');`"
  >
    <div class="container px-4 mx-auto">
      <div class="grid gridcols-12 gap-0">
        <div class="col-span-4 col-start-6">
          <o-login></o-login>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const background = require("@/assets/topography.svg") as string;
// const background = require("@/assets/logo.png") as string;

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      background
    };
  }
});
</script>
