<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mt-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-green-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-gray-800' : 'text-white']"
          >
            {{ title }}
          </h3>
        </div>
      </div>
    </div>
    <div class="w-full overflow-x-auto flex flex-row flex-nowrap">
      <!-- Projects table -->
      <table
        v-for="item in items"
        :key="item"
        class="items-center bg-transparent border-collapse flex-1"
      >
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
              :class="[
                color === 'light'
                  ? 'bg-gray-100 text-gray-600 border-gray-200'
                  : 'bg-primary text-green-300 border-primary'
              ]"
            >
              {{ item.header }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(data, i) in item.data" :key="i" class="border-t-2">
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center"
            >
              <!-- <span
                class="ml-3 font-bold"
                :class="[color === 'light' ? 'text-gray-700' : 'text-white']"
              >
                {{ data }}
              </span> -->
              <component :is="item.component" label="label"></component>
            </td>

            <!-- <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4"
            ></td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {};
  },
  // components: {
  //   TableDropdown
  // },
  props: {
    title: String,
    items: { type: Array as () => Array<object> },
    headers: { type: Array as () => Array<string> },
    content: { type: Array as () => Array<object> },
    color: {
      default: "light",
      validator: function(value: string): boolean {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      }
    }
  }
};
</script>
