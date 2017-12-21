import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import * as _ from "lodash";

@Component({
  selector: 'page-dropdown-content',
  templateUrl: 'dropdown-content.html',
})
export class DropdownContentPage {
  items: any[] = [];
  allItems: any[] = [];

  display: string;
  selectedItem: any;
  queryText: string = "";
  showCount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.selectedItem = this.navParams.data.selectedItem;
    this.allItems = this.navParams.data.items;
    this.items = this.allItems;
    this.display = this.navParams.data.display;
    this.showCount = this.navParams.data.showCount;
    this.filter();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DropdownContentPage');
  }

  dismiss(item?: any) {
    if (item) { this.selectedItem = item }
    this.viewCtrl.dismiss(this.selectedItem);
  }

  filter() {
    let val = _.deburr(this.queryText.toLocaleLowerCase());
    this.items = this.allItems;
    if (val !== "") {
      this.items = _.filter(this.allItems, o => { return _.deburr(o[this.display].toLocaleLowerCase()).indexOf(val) > -1 })
    }
    if (this.showCount > 0) {
      this.items = this.items.slice(0, this.showCount);
    }
  }

  public formatItem(value: any): string {
    return value ? value[this.display] : null;
  }
}
