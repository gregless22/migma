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
      <div class="flex">
        <div>
          INclude site selector
        </div>
        <div class="ml-4">
          <m-dropdown>
            <template v-slot:button>
              <div class="px-2 fas fa-user"></div>

              User

              <div class="pl-2 fas fa-chevron-down"></div>
            </template>
            <template
              v-slot:content
              class="z-50 flex items-center justify-between w-full px-2 py-1 my-1 rounded hover:bg-indigo-600 hover:text-white"
            >
              <ul>
                <li>Update Profile</li>
                <li>Do Other Stuff</li>
              </ul>
            </template>
          </m-dropdown>
        </div>
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
