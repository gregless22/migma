<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="grid grid-cols-4">
      <div class="col-start-2">
        <a-button @click="logout">Click me</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    logout() {
      // / do nothing
    }
  }
});
</script>
