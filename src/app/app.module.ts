import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';


import {RasamApp} from './app.component';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {TabsPage} from '../pages/tabs/tabs';
import {HomePage} from '../pages/home/home';
import {VideoPage} from '../pages/video/video';
import {PhotoPage} from '../pages/photo/photo';
import {TextPage} from '../pages/text/text';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';


const appResources = [
  RasamApp,
  TutorialPage,
  TabsPage,
  HomePage,
  VideoPage,
  PhotoPage,
  TextPage,
];

@NgModule({
  declarations: [
    appResources
  ],

  imports: [
    IonicModule.forRoot(RasamApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    appResources
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
