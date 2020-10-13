import { domain, clientId } from "../../auth.config.json";
import { createAuth0Plugin } from "@/plugins/auth";
import { Auth0ClientOptions } from "@auth0/auth0-spa-js";

/** Define a default action to perform after authentication */
// const DEFAULT_REDIRECT_CALLBACK = () =>
//   window.history.replaceState({}, document.title, window.location.pathname);

const options: Auth0ClientOptions = {
  // onRedirectCallback: DEFAULT_REDIRECT_CALLBACK,
  domain: domain,
  // eslint-disable-next-line @typescript-eslint/camelcase
  client_id: clientId,
  // audience: options.audience,
  // eslint-disable-next-line @typescript-eslint/camelcase
  redirect_uri: "http://localhost:8081/about"
};

const auth0 = createAuth0Plugin(options);

export default auth0;
