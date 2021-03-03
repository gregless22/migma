// // Create a simple Vue plugin to expose the wrapper object throughout the application
// import { App } from "vue";
// import createAuth0Client, {
//   Auth0Client,
//   Auth0ClientOptions,
//   GetTokenWithPopupOptions,
//   LogoutOptions
// } from "@auth0/auth0-spa-js";

// declare module "@vue/runtime-core" {
//   interface ComponentCustomProperties {
//     $auth0: Auth0Client;
//   }
// }

// export interface Auth0Plugin {
//   install(a: App): void;
// }

// export function createAuth0Plugin(options: Auth0ClientOptions): Auth0Plugin {
//   const Auth0Plugin = {
//     loading: true,
//     isAuthenticated: false,
//     user: {},
//     popupOpen: false,
//     error: null,
//     auth0Client: createAuth0Client(options),
//     async logout(o: LogoutOptions) {
//       (await this.auth0Client).logout(o);
//     },
//     async loginWithRedirect(o: LogoutOptions) {
//       (await this.auth0Client)
//         .loginWithRedirect(o)
//         .catch(err => console.log(err));
//       this.user = (await this.auth0Client).getUser();
//       console.log(this.user);
//       this.isAuthenticated = true;
//     },
//     /** Returns all the claims present in the ID token */
//     async getIdTokenClaims(o: GetTokenWithPopupOptions) {
//       return (await this.auth0Client).getIdTokenClaims(o);
//     },
//     /** Returns the access token. If the token is invalid or missing, a new one is retrieved */
//     async getTokenSilently(o: GetTokenWithPopupOptions) {
//       return (await this.auth0Client).getTokenSilently(o);
//     },
//     /** Gets the access token using a popup window */

//     async getTokenWithPopup(o: GetTokenWithPopupOptions) {
//       return (await this.auth0Client).getTokenWithPopup(o);
//     },
//     install(app: App): void {
//       app.config.globalProperties.$auth0 = this;
//     }
//   };

//   return Auth0Plugin;
// }
