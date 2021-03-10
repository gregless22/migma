<template>
  <div class="relative">
    <button
      class="relative z-10 flex items-center px-2 py-1 text-white transition-all duration-150 ease-linear bg-blue-600 border border-blue-600 rounded select-none focus:outline-none hover:bg-white hover:text-blue-600"
      @click="open = !open"
    >
      <slot name="button"></slot>
    </button>

    <!-- to close when clicked on space around it-->
    <button
      class="fixed inset-0 w-full h-full cursor-default focus:outline-none"
      v-if="open"
      @click="open = false"
      tabindex="-1"
    ></button>

    <!--dropdown menu-->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all ease-in duration-750"
      enter-class="scale-75 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-75 opacity-0"
    >
      <div
        class="absolute z-50 w-48 px-2 py-1 mt-4 text-sm bg-white border rounded shadow-lg"
        :class="placement === 'right' ? 'right-0' : 'left-0'"
        v-if="open"
      >
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import emitter from "tiny-emitter/instance";
// const emitter = new Emitter();

export default {
  data() {
    return {
      open: false
    };
  },
  props: {
    placement: {
      type: String,
      default: "right",
      validator: value => ["right", "left"].indexOf(value) !== -1
    }
  },
  mounted() {
    const onEscape = e => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.open = false;
      }
    };

    document.addEventListener("keydown", onEscape);

    emitter.once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", onEscape);
    });
  }
};
</script>
