import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropdownContentPage } from './dropdown-content/dropdown-content';
import { ModalController } from "ionic-angular";
@Component({
  selector: 'ion-dropdown',
  templateUrl: 'dropdown.html'
})
export class DropdownComponent {
  @Input() selectedItem: any;
  @Input() placeholder: string;
  @Input() items: any[] = [];
  @Input() value: string;
  @Input() display: string;
  @Input() showCount: number = -1;

  @Output() selectedItemChange: EventEmitter<any> = new EventEmitter<any>(); //naziv input varijable + Change 

  constructor(public modalCtrl: ModalController) { }

  showModal() {
    let modal = this.modalCtrl.create(
      DropdownContentPage,
      {
        display: this.display,
        value: this.value,
        items: this.items,
        selectedItem: this.selectedItem,
        showCount: this.showCount
      });
    modal.onDidDismiss(data => {
      if (data) {
        this.selectedItem = data;
        let val = this.formatValue(data);
        this.selectedItemChange.emit(val);
        this.placeholder = this.getPlaceholder(data);
      }
    })
    modal.present();
  }

  formatValue(data): any {
    if (this.value && data[this.value]) {
      return data[this.value];
    } else {
      return this.selectedItem;
    }
  }

  getPlaceholder(data) {
    if (this.selectedItem && this.selectedItem[this.display]) {
      return this.selectedItem[this.display];
    }
    else return this.placeholder;
  }

}
