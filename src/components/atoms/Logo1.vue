<template>
  <img alt="..." :src="logo" class="object-center" />
</template>

<script>
import logo from "@/assets/cte-logo-18.jpg";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return { logo };
  }
});
</script>
