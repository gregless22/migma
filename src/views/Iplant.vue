<template>
  <div class="iplant">
    <o-navbar />
    <o-sidebar />
    <main>
      <section class="h-full min-w-min md:ml-64 py-16 px-6 bg-grey">
        <router-view name="template" />
        <!-- <o-footer /> -->
      </section>
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "iplant",
  methods: {}
});
</script>
