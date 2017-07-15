import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-importnums',
  templateUrl: 'importnums.html',
})
export class ImportnumsPage {

  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImportnumsPage');
  }
 openMenu() {
   this.menuCtrl.open();
 }
}
