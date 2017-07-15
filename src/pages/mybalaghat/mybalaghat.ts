import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-mybalaghat',
  templateUrl: 'mybalaghat.html',
})
export class MybalaghatPage {

  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MybalaghatPage');
  }
 openMenu() {
   this.menuCtrl.open();
 }
}
