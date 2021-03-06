import { Component ,ViewChild} from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LangPage }from "../pages/lang/lang";
import { HomePage } from '../pages/home/home';
import {AboutusPage} from "../pages/aboutus/aboutus";
import {ActivePage} from "../pages/active/active";
import {BaladyaPage} from "../pages/baladya/baladya";
import {ConfirmPage} from "../pages/confirm/confirm";
import {ContactusPage} from "../pages/contactus/contactus";
import {EditaccountPage} from "../pages/editaccount/editaccount";
import {FindbalaghPage} from "../pages/findbalagh/findbalagh";
import {ImportnumsPage} from "../pages/importnums/importnums";
import {LoginPage} from "../pages/login/login";
import {MessagesPage} from "../pages/messages/messages";
import {MybalaghatPage} from "../pages/mybalaghat/mybalaghat";
import {NewbalaghPage} from "../pages/newbalagh/newbalagh";
import {SignupPage} from "../pages/signup/signup";
import {SuggestionPage} from "../pages/suggestion/suggestion";
import {UserServiceProvider} from "../providers/user-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LangPage;
  //  private popcall=this.showAlert();
   public visitorPages : Array<{title: string, icon: string, component: any}>;
  constructor( public userService: UserServiceProvider,public alertCtrl: AlertController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.initLists();
  }
   

    initLists()
  {
    this.visitorPages = [
      // { title: 'Map', icon: 'map',component: HomePage},
      { title: 'Login', icon: 'log-in',component: LoginPage },
      { title: 'Sign up', icon: 'person-add',component: SignupPage},
      { title: 'Balaghaty', icon: 'albums',component: MybalaghatPage },
      { title: 'Messages Box', icon: 'mail',component: MessagesPage },
      // { title: 'Balaghat 940', icon: 'contacts',component: this.popcall },
      { title: 'Search old balagh', icon: 'warning',component: FindbalaghPage },
      { title: 'Important Numbers', icon: 'call',component: ImportnumsPage },
      { title: 'Help', icon: 'help-circle',component: ImportnumsPage },
      
    ];
  }
  openHome(){
    this.nav.push(HomePage);
    }
  openLoginPage(){
    this.nav.push(LoginPage);
    }
  openSignupPage(){
    this.nav.push(SignupPage);
    }
  openMybalaghatPage(){
    this.nav.push(MybalaghatPage);
    }
  openMessagesPage(){
    this.nav.push(MessagesPage);
    }
  openFindbalaghPage(){
    this.nav.push(FindbalaghPage);
    }
  openImportnumsPage(){
    this.nav.push(ImportnumsPage);
    }

  gotoLoginPage()
  {
    this.nav.push(LoginPage);
  }
  openEditaccountPage(){
    this.nav.push(EditaccountPage);
    
  }
  exeEmergancy(){
  this.userService.translateArray(
 ['Emergancy Calls',
  'Call Emergancy',
  'Send Message']).subscribe((translatedArray)=>{
    this.showEmergancy(translatedArray);
  });
  }
  showEmergancy(translatedArray : string[] ) {
  let alert = this.alertCtrl.create({
     title:translatedArray[0],
     cssClass:'totalcalls',
     buttons: [
      { text:translatedArray[1],
        cssClass:'whatCall',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      { 
        text:translatedArray[2],
        cssClass:'sendMessage',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}

help() {
  let alert = this.alertCtrl.create({
    title: 'Help',
    buttons: [
      {
        text: 'Suggestions',
        role: 'cancel',
        cssClass:'helpclass',
        handler: () => {
          this.nav.push(SuggestionPage);
        }
      },
      {
        text: 'Contact us',
        cssClass:'helpclass',
        handler: () => {
            this.nav.push(ContactusPage);
      }
      },
      {
        text: 'About us',
        cssClass:'helpclass',
        handler: () => {
          this.nav.push(AboutusPage);
      }
      }
    ]
  });
  alert.present();
}
}

