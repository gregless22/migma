<template>
  <div
    class="flex flex-wrap items-center justify-between px-4 mb-0 border-0 rounded-t"
  >
    <div class="inline-flex h-16">
      <h3 class="my-4 text-lg font-semibold text-gray-800">
        {{ title }}
      </h3>
    </div>
    <div class="inline-flex">
      <ul class="flex text-black">
        <!-- <li class="px-2">
          <a-button
            icon="fas fa-trash"
            @click="$emit('delete-selected', $event)"
            :disabled="buttonDisabled"
            >Delete</a-button
          >
        </li>
        <li class="px-2">
          <a-button
            icon="fas fa-edit"
            class=""
            @click="$emit('update-selected', $event)"
            :disabled="buttonDisabled"
            >Edit</a-button
          >
        </li> -->
        <li class="px-2">
          <m-dropdown>
            <template v-slot:button
              >Manage Fields
              <div class="pl-2 fas fa-chevron-down"></div>
            </template>
            <template
              v-slot:content
              class="flex items-center justify-between w-full px-2 py-1 my-1 rounded hover:bg-indigo-600 hover:text-white"
            >
              <div v-for="(h, i) in headers" :key="i">
                <a-checkbox class="mr-2" v-model="h['display']"></a-checkbox>
                {{ h.header }}
              </div>
              <!-- TODO make it so the person can rearrange the order of the table -->
            </template>
          </m-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: ["delete-selected", "update-selected"],
  props: {
    title: {
      type: String,
      default: "Title"
    },
    buttonDisabled: {
      type: Boolean,
      default: true
    },
    headers: {
      type: Array as () => Array<object>
    }
  },
  methods: {}
});
</script>
