import { autoinject, CompositionEngine, Container } from "aurelia-framework";
import { IonicService } from "ionic-bridge/ionic-service";
import { Demo } from "demo";

@autoinject
export class App {
  constructor(
    private element: Element,
    private ionicService: IonicService  ) { 
    this.onResetValuesClick();
  }

  inputValue;
  dateTimeValue;
  textareaValue;
  checkboxChecked;
  rangeValue;
  range2Value;
  selectValue;
  toogleValue;

  onResetValuesClick() {
    this.inputValue = "ABC";
    this.dateTimeValue = "2019-03-01";
    this.textareaValue = "long text";
    this.checkboxChecked = true;
    this.rangeValue = 50;
    this.range2Value = {
      lower: 10,
      upper: 50
    };
    this.selectValue = null;
    this.toogleValue = true;
  }

  async onActionSheetClick() {
    const actionSheetController = this.ionicService.actionSheetController;
    await actionSheetController.componentOnReady();

    const actionSheet = await actionSheetController.create({
      header: "Header",
      buttons: [
        {
          text: "Button 1",
          handler: () => {
            console.log("Button 1 clicked")
          }
        },
        {
          text: "Button 2",
          handler: () => {
            console.log("Button 2 clicked")
          }
        }
      ]
    });

    await actionSheet.present();
  }
  async onAlertClick() {
    const alertController = this.ionicService.alertController;
    await alertController.componentOnReady();

    const alert = await alertController.create({
      header: "Prompt!",
      inputs: [
        {
          placeholder: "Placeholder"
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
  async onLoadingClick() {
    const loadingController = this.ionicService.loadingController;
    await loadingController.componentOnReady();

    const loading = await loadingController.create({
      spinner: null,
      duration: 5000,
      message: "Please wait...",
      translucent: true
    });
    return await loading.present();
  }
  async onModalClick(selector: string)
  async onModalClick(viewModel: any) {
    const modalController = this.ionicService.modalController;
    await modalController.componentOnReady();

    let component;

    if (typeof viewModel === "string") {
      const template = <HTMLTemplateElement>document.querySelector(viewModel);
      if (!template) {
        return;
      }

      component = this.ionicService.createComponent(
        this.element,
        template
      );
    } else {
      component = await this.ionicService.createView(
        viewModel,
        this
      );
    }
    
    const modal = await modalController.create({
      component: component
    });

    await modal.present();
  }
  async onPopoverClick(event: Event, selector: string) {
    const popoverController = this.ionicService.popoverController;
    await popoverController.componentOnReady();

    const template = <HTMLTemplateElement>document.querySelector(selector);
    if (!template) {
      return;
    }

    const modal = await popoverController.create({
      component: this.ionicService.createComponent(this.element, template),
      event: event
    });

    await modal.present();
  }
  async onPickerClick() {
    const pickerController = this.ionicService.pickerController;
    await pickerController.componentOnReady();

    const picker = await pickerController.create({
      columns: [
        {
          name: "Column1",
          options: [{ text: "A" }, { text: "B" }]
        },
      ],
      buttons: [
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Ok")
          }
        }
      ]
    });

    await picker.present();
  }
  async onToastClick() {
    const toastController = this.ionicService.toastController;
    await toastController.componentOnReady();

    const toast = await toastController.create({
      duration: 3000,
      message: "I'm a toast :-)"
    });

    await toast.present();
  }

  onModalInsideButtonClick() {
    console.log("Modal Inside Click");

    this.ionicService.modalController.dismiss();
  }
}
