<template>
  <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">
    {{ label }}
  </label>
  <a-input-text
    :name="name"
    :type="type"
    v-model="value"
    @input="$emit('update:modelValue', $event.target.value)"
    @change="validate"
  ></a-input-text>
  <div class="h-6 ml-2 mt-1">
    <p v-show="!valid" class="text-red-500 text-sm">
      {{ error }}
    </p>
  </div>
</template>

<script">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FormText",
  data() {
    return {
      value: this.modelValue,
      valid: false,
      error: ""
    };
  },
  created() {
    this.$emit("validator", this.validate);
  },
  emits: {
    validator: null,
    "update:modelValue": null
  },
  props: {
    label: { type: String },
    name: { type: String, required: true },
    modelValue: { type: String, required: true },
    type: { type: String },
    rules: { type: Array, default: () => [] }
  },
  methods: {
    validate() {
      return this.rules.every(f => {
        const test = (f as Function)(this.value);
        if (test !== true) {
          this.valid = false;
          this.error = test;
          return false;
        }
        return test;
      })
        ? (this.valid = true)
        : (this.valid = false);
    }
  }
});
</script>
