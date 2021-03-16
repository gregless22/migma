<template>
  <!-- Navbar -->
  <nav
    class="fixed top-0 left-0 z-10 flex items-center justify-between w-full h-16 p-1 shadow-xl bg-secondary bg-opacity-90"
  >
    <div
      class="flex flex-wrap items-center justify-between w-full px-4 mx-auto md:px-10"
    >
      <a-logo2 />
      <!-- Brand -->
      <div class="flex-row flex-wrap items-center text-white">
        <h1>iPLANT</h1>
      </div>

      <!-- User -->
      <!-- <ul class="flex-col items-center hidden list-none md:flex-row md:flex">
        <user-dropdown />
      </ul> -->
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
// import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  // components: {
  //   UserDropdown,
  // },
};
</script>
