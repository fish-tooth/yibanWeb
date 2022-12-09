import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

import router from "./router/index";

import header from "./components/common/header.vue";
import footer from "./components/common/footer.vue";

const app = createApp(App);
app.component("Header", header).component("Footer", footer);
app.use(router).use(ElementPlus).mount("#app");
