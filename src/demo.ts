import {autoinject} from "aurelia-framework";
import { IonicService } from "ionic-bridge/ionic-service";

@autoinject
export class Demo {
  constructor(
    private ionicService: IonicService
  ) {}

  bind() {
    console.log("bind");
  }
  attached() {
    console.log("attached");
  }
  detached() {
    console.log("detached");
  }
  unbind() {
    console.log("unbind");
  }

  onCloseClick() {
    this.ionicService.modalController.dismiss();
  }
}