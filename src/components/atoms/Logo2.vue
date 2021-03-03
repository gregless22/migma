<template>
  <img alt="..." :src="logo" class="h-12" />
</template>

<script lang="ts">
const logo = require("@/assets/cte-logo-light.png") as string;

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return { logo };
  }
});
</script>
