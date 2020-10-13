<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ $auth0 }}
    <a @click="logout">logout</a>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    logout() {
      console.log(this.$auth0);
    }
  }
});
</script>
