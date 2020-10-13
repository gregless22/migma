<template>
  <div class="w-full py-40">
    <a-card>
      <form class="m-4">
        <div class="mb-4">
          <h1>Sign into your account</h1>
        </div>
        <div class="grid grid-cols-1 gap-6">
          <div>
            <m-form-text
              label="Email Address"
              name="email"
              v-model="email"
              type="email"
              :rules="rules.email"
              @validator="e => validators.push(e)"
            ></m-form-text>
          </div>
          <div>
            <m-form-text
              label="Password"
              name="password"
              v-model="password"
              type="password"
              :rules="rules.password"
              @validator="e => validators.push(e)"
            ></m-form-text>
          </div>
          <div><m-form-checkbox label="Remember me"></m-form-checkbox></div>
          <div><a-button @click="signin">Sign in</a-button></div>
        </div>
      </form>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      email: new String(),
      password: new String(),
      counter: 0,
      rules: {
        email: [
          (v: string) => (!v ? "Email is Required" : true),
          (v: string) => (/\S+@\S+\.\S+/.test(v) ? true : "Email is not valid")
        ],
        password: [
          (v: string) => (!v ? "Password is Required" : true),
          (v: string) =>
            v.length > 6 ? true : "Password must be more than 6 characters"
        ]
      },
      validators: []
    };
  },
  methods: {
    signin() {
      let valid = true;

      this.validators.forEach(e => {
        valid = (e as Function)() && valid;
      });

      if (valid) {
        this.$auth0.loginWithRedirect();
      }
    }
  }
});
</script>
