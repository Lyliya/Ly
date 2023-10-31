import "./style.scss";

import { defineSetupVue3 } from "@histoire/plugin-vue";
import WrapperGlobal from "./histoire/GlobalWrapper.vue";

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  addWrapper(WrapperGlobal);
});
