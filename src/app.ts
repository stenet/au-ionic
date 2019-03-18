import { autoinject } from "aurelia-framework";

@autoinject
export class App {
  constructor() { }

  value = "ABC";

  async onButtonClick() {
    this.value = "CBA";

    const alertController: HTMLIonAlertControllerElement = document.querySelector("ion-alert-controller");
    await alertController.componentOnReady();
    
    const alert = await alertController.create({
      header: "Prompt!",
      inputs: [
        {
          placeholder: "Placeholder 1"
        },
        {
          name: "name2",
          id: "name2-id",
          value: "hello",
          placeholder: "Placeholder 2"
        },
        {
          name: "name3",
          value: "http://ionicframework.com",
          type: "url",
          placeholder: "Favorite site ever"
        },
        // input date with min & max
        {
          name: "name4",
          type: "date",
          min: "2017-03-01",
          max: "2018-01-12"
        },
        // input date without min nor max
        {
          name: "name5",
          type: "date"
        },
        {
          name: "name6",
          type: "number",
          min: -5,
          max: 10
        },
        {
          name: "name7",
          type: "number"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel")
          }
        }, {
          text: "Ok",
          handler: () => {
            console.log("Confirm Ok")
          }
        }
      ],
    });
    await alert.present();
  }
}
