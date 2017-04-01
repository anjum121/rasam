import {Component, ViewChild} from '@angular/core';

import {Events, MenuController, Nav, Platform} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';

import {TabsPage} from '../pages/tabs/tabs';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {HomePage} from '../pages/home/home'


export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class RasamApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    {title: 'Schedule', component: TabsPage, tabComponent: HomePage, icon: 'calendar'},
    {title: 'Speakers', component: TabsPage, tabComponent: HomePage, index: 1, icon: 'contacts'},
    {title: 'Map', component: TabsPage, tabComponent: HomePage, index: 2, icon: 'map'},
    {title: 'About', component: TabsPage, tabComponent: HomePage, index: 3, icon: 'information-circle'}
  ];
  // loggedInPages: PageInterface[] = [
  //   { title: 'Account', component: AccountPage, icon: 'person' },
  //   { title: 'Support', component: SupportPage, icon: 'help' },
  //   { title: 'Logout', component: TabsPage, icon: 'log-out', logsOut: true }
  // ];
  // loggedOutPages: PageInterface[] = [
  //   { title: 'Login', component: LoginPage, icon: 'log-in' },
  //   { title: 'Support', component: SupportPage, icon: 'help' },
  //   { title: 'Signup', component: SignupPage, icon: 'person-add' }
  // ];
  rootPage: any;

  constructor(public events: Events,
              // public userData: UserData,
              public menu: MenuController,
              public platform: Platform,
              // public confData: ConferenceData,
              public storage: Storage,
              public splashScreen: SplashScreen) {

    // Check if the user has already seen the tutorial
    this.storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = TutorialPage;
        }
        this.platformReady()
      })

    // load the conference data
    // confData.load();

    // decide which menu items should be hidden by current login status stored in local storage
    // this.userData.hasLoggedIn().then((hasLoggedIn) => {
    //   this.enableMenu(hasLoggedIn === true);
    // });
    //
    // this.listenToLoginEvents();
  }

  openPage(page: PageInterface) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      this.nav.setRoot(page.component, {tabIndex: page.index}).catch(() => {
        console.log("Didn't set nav root");
      });
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        // this.userData.logout();
      }, 1000);
    }
  }

  openTutorial() {
    this.nav.setRoot(TutorialPage);
  }

  // listenToLoginEvents() {
  //   this.events.subscribe('user:login', () => {
  //     this.enableMenu(true);
  //   });
  //
  //   this.events.subscribe('user:signup', () => {
  //     this.enableMenu(true);
  //   });
  //
  //   this.events.subscribe('user:logout', () => {
  //     this.enableMenu(false);
  //   });
  // }

  // enableMenu(loggedIn: boolean) {
  //   this.menu.enable(loggedIn, 'loggedInMenu');
  //   this.menu.enable(!loggedIn, 'loggedOutMenu');
  // }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().component === page.component) {
      return 'primary';
    }
    return;
  }
}
