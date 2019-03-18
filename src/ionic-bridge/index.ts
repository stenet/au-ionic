import { 
  FrameworkConfiguration,
  EventManager
} from "aurelia-framework";

import "@ionic/core/dist/ionic";
import "@ionic/core/css/ionic.bundle.css";

export function configure(config: FrameworkConfiguration) {
  const eventManager = config.container.get(EventManager);
  
  eventManager.registerElementConfig({
    tagName: "ion-input",
    properties: {
      value: ["change"]
    }
  });
  eventManager.registerElementConfig({
    tagName: "ion-textarea",
    properties: {
      value: ["change"]
    }
  });
  eventManager.registerElementConfig({
    tagName: "ion-datetime",
    properties: {
      value: ["change", "ionChange"]
    }
  });
  eventManager.registerElementConfig({
    tagName: "ion-checkbox",
    properties: {
      checked: ["change", "ionChange"]
    }
  });
  eventManager.registerElementConfig({
    tagName: "ion-range",
    properties: {
      value: ["change", "ionChange"]
    }
  });
  eventManager.registerElementConfig({
    tagName: "ion-select",
    properties: {
      value: ["change", "ionChange"]
    }
  });
  eventManager.registerElementConfig({
    tagName: "ion-toggle",
    properties: {
      checked: ["change", "ionChange"]
    }
  });
}
