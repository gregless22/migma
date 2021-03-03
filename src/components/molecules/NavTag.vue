<template>
  <li class="items-center">
    <router-link :to="to" v-slot="{ href, navigate, isActive }">
      <a
        :href="href"
        @click="navigate"
        class="text-xs uppercase py-3 font-bold block"
        :class="[
          isActive
            ? 'text-green-500 hover:text-green-600'
            : 'text-gray-800 hover:text-gray-600'
        ]"
      >
        <div
          class="mr-2 text-sm"
          :class="[isActive ? 'opacity-75' : 'text-blue-500', icon]"
        ></div>
        <slot name="icon"></slot>
        {{ uppercaseLabel }}
      </a>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  props: {
    to: String,
    label: String,
    icon: String
  },
  computed: {
    uppercaseLabel(): string | undefined {
      return this.label?.toUpperCase();
    }
  }
});
</script>
