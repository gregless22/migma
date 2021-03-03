<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 mt-16"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
        to="/"
      >
        Menu
      </router-link>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Hazardous Area
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <m-nav-tag
            to="/iplant/site-details"
            label="Site Details"
            icon="fas fa-chart-bar"
          >
          </m-nav-tag>
          <m-nav-tag
            to="/iplant/equipment"
            label="Equipment List"
            icon="fas fa-tools"
          ></m-nav-tag>
          <m-nav-tag
            to="/iplant/defect"
            label="Defects"
            icon="fas fa-cogs"
          ></m-nav-tag>
          <m-nav-tag
            to="/iplant/certificate"
            label="Certificates"
            icon="fas fa-scroll"
          ></m-nav-tag>
          <m-nav-tag
            to="/iplant/audit"
            label="Audit Reports"
            icon="fas fa-pen-fancy"
          ></m-nav-tag>
          <m-nav-tag
            to="/iplant/classification"
            label="Classification"
            icon="fas fa-inbox"
          ></m-nav-tag>
          <m-nav-tag
            to="/iplant/conformity"
            label="Conformity Assesments"
            icon="fas fa-check-circle"
          ></m-nav-tag>
          <m-nav-tag
            to="/iplant/calculation"
            label="Calculations"
            icon="fas fa-calculator"
          ></m-nav-tag>
          <m-nav-tag
            to="/iplant/competency"
            label="Competencies"
            icon="fas fa-graduation-cap"
          ></m-nav-tag>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Auth Layout Pages
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/"
            >
              <i class="fas fa-fingerprint text-gray-400 mr-2 text-sm"></i>
              Login
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/"
            >
              <i class="fas fa-clipboard-list text-gray-400 mr-2 text-sm"></i>
              Register
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          No Layout Pages
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/"
            >
              <i class="fas fa-newspaper text-gray-400 mr-2 text-sm"></i>
              Landing Page
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
              to="/"
            >
              <i class="fas fa-user-circle text-gray-400 mr-2 text-sm"></i>
              Profile Page
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      collapseShow: "hidden"
    };
  },
  methods: {
    toggleCollapseShow: function(classes) {
      this.collapseShow = classes;
    }
  }
};
</script>
