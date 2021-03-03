<template>
  <img alt="..." :src="logo" class="object-center" />
</template>

<script lang="ts">
const logo = require("@/assets/cte-logo-18.jpg") as string;

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return { logo };
  }
});
</script>
