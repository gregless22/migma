<template>
  <div class="iplant">
    <t-navbar />
    <t-sidebar />
    <main>
      <section class="h-screen px-6 py-16 min-w-min md:ml-64 bg-grey">
        <router-view name="template" />
        <!-- <o-footer /> -->
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "iplant"
});
</script>
