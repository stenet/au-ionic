/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
import {Aurelia} from "aurelia-framework"
import environment from "./environment";
import {PLATFORM} from "aurelia-pal";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .basicConfiguration()
    .feature(PLATFORM.moduleName("ionic-bridge/index"));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  aurelia
    .start()
    .then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}
