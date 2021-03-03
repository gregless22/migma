<template>
  <!-- Navbar -->
  <nav
    class="fixed left-0 top-0 items-center justify-between w-full z-10 flex h-16 p-1 bg-secondary bg-opacity-90 shadow-xl"
  >
    <div
      class="w-full mx-auto items-center flex justify-between flex-wrap md:px-10 px-4"
    >
      <a-logo2 />
      <!-- Brand -->
      <div class="flex-row flex-wrap items-center text-white">
        <h1>iPLANT</h1>
      </div>

      <!-- Form -->
      <form class="md:flex hidden flex-row flex-wrap items-end mr-3">
        <div class="relative flex w-full flex-wrap items-stretch">
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <i class="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search here..."
            class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
          />
        </div>
      </form>
      <!-- User -->
      <!-- <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
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
