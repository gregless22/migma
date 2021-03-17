<template>
  <img alt="..." :src="logo" class="h-12" />
</template>

<script>
import logo from "@/assets/cte-logo-light.png";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return { logo };
  }
});
</script>
