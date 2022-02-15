import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";

createApp(App).use(store).use(router).use(BootstrapVue3).mount("#app");
