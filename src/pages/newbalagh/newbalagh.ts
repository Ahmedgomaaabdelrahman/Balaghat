import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ConfirmPage} from "../confirm/confirm";
import { MenuController } from 'ionic-angular';
@Component({
  selector: 'page-newbalagh',
  templateUrl: 'newbalagh.html',
})
export class NewbalaghPage {

  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewbalaghPage');
  }
 
 goconfirm(){
   this.navCtrl.push(ConfirmPage);
 }
 openMenu() {
   this.menuCtrl.open();
 }
}
