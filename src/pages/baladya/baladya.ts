import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-baladya',
  templateUrl: 'baladya.html',
})
export class BaladyaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaladyaPage');
  }


  login(){
    this.navCtrl.push(LoginPage);
  }
}
