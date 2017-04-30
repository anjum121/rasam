import {NgModule, ErrorHandler } from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';
import {Http} from '@angular/http';

import {MyTranslateLoader} from '../translate/translate.service';
import {TranslateModule, TranslateLoader, TranslateService} from 'ng2-translate';
import {GlobalizationService} from '../providers/globalization'
import {StorageService} from '../providers/storage'


//SERVICES

import {AppConstant} from '../constants/app.constants';
import {ServiceConstants} from '../constants/service.constants';
import {ApiServices} from '../providers/services';


//PAGES
import {RasamApp} from './app.component';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {TabsPage} from '../pages/tabs/tabs';
import {HomePage} from '../pages/home/home';
import {VideoPage} from '../pages/video/video';
import {PhotoPage} from '../pages/photo/photo';
import {TextPage} from '../pages/text/text';
import {SettingPage} from '../pages/setting/setting';
import {AboutPage} from '../pages/about/about';
import {LinkPage} from '../pages/links/link';
import {PopupPage} from '../pages/popup/popup';



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
  SettingPage,
  AboutPage,
  LinkPage,
  PopupPage,

];

@NgModule({
  declarations: [
    appResources
  ],

  imports: [
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (MyTranslateLoader),
      deps: [Http]
    }),
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
    AppConstant,
    ServiceConstants,
    ApiServices,
    GlobalizationService,
    StorageService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  constructor(public translate: TranslateService,
              private globalizationService: GlobalizationService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.addLangs([this.globalizationService.LANGUAGE_en_US]);
    // translate.setDefaultLang('en-US');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.globalizationService.getDeviceLanguage());
  }

}
