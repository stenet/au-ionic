import { autoinject, TemplatingEngine, Controller } from "aurelia-framework";

@autoinject
export class IonicService {
  private _cache = {};

  constructor(
    private templatingEngine: TemplatingEngine
  ) {}

  createComponent(creatorElement: Element, template: HTMLTemplateElement): HTMLElement {
    const component = document.createElement("div");
    component.appendChild(template.content.cloneNode(true));

    let controller: Controller;
    if (creatorElement["au"]) {
      controller = creatorElement["au"].controller;
    } else if (creatorElement["aurelia"]) {
      controller = creatorElement["aurelia"].root;
    }
    
    if (!controller) {
      throw new Error("No Controller found");
    }

    this.templatingEngine.enhance({
      element: component,
      bindingContext: controller.viewModel,
      resources: controller.view["resources"]
    });

    return component;
  }

  get actionSheetController(): HTMLIonActionSheetControllerElement {
    return this.getFromCache("ion-action-sheet-controller");
  }
  get alertController(): HTMLIonAlertControllerElement {
    return this.getFromCache("ion-alert-controller");
  }
  get loadingController(): HTMLIonLoadingControllerElement {
    return this.getFromCache("ion-loading-controller");
  }
  get modalController(): HTMLIonModalControllerElement {
    return this.getFromCache("ion-modal-controller");
  }
  get menuController(): HTMLIonMenuControllerElement {
    return this.getFromCache("ion-menu-controller");
  }
  get pickerController(): HTMLIonPickerControllerElement {
    return this.getFromCache("ion-picker-controller");
  }
  get popoverController(): HTMLIonPopoverControllerElement {
    return this.getFromCache("ion-popover-controller");
  }
  get toastController():  HTMLIonToastControllerElement {
    return this.getFromCache("ion-toast-controller");
  }

  private getFromCache(tagName: string) {
    if (!this._cache[tagName]) {
      let el = document.querySelector(tagName);

      if (!el) {
        el = document.createElement(tagName);
        document.body.appendChild(el);
      }

      this._cache[tagName] = el;
    }

    return this._cache[tagName];
  }
}