<template>
  <div class="iplant">
    <t-navbar />
    <t-sidebar />
    <main>
      <section class="h-full min-w-min md:ml-64 py-16 px-6 bg-grey">
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
