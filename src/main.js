import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApolloProvider } from "@vue/apollo-option";
import { API } from "./api/api";
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

import "./assets/tailwind.css";
const apolloProvider = createApolloProvider({
  defaultClient: API,
});
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
createApp(App)
  .use(router)
  .use(pinia)
  .use(apolloProvider)
  .use(Toast)
  .mount("#app");
