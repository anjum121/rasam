import {Component} from '@angular/core';
import {NavController, NavParams, Events} from 'ionic-angular';
import {TranslateService} from 'ng2-translate';
import {AppConstant} from '../../constants/app.constants';


import {LanguageInfo} from '../../dto/common.dto';
import {GlobalizationService} from '../../providers/globalization';


@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  selectedLanguageCode: any;
  languageList: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private events: Events,
              private translate: TranslateService,
              private appConstant: AppConstant,
              private globalizationService: GlobalizationService,) {

    this.selectedLanguageCode = this.globalizationService.getDeviceLanguage();
    let availableLanguages: Array<LanguageInfo> = this.globalizationService.getAvailableLanguages();

    this.languageList = [];
    for (let i = 0; i < availableLanguages.length; i++) {
      let language: LanguageInfo = availableLanguages[i];
      this.languageList.push(language);
    }

  }


  updateLang(languageCode: string) {
    this.selectedLanguageCode = languageCode;
    this.globalizationService.saveDeviceLanguage(languageCode);
    this.translate.use(languageCode);
    this.events.publish(this.appConstant.EVENT_APP_LANGUAGE_CHANGED);
  }

}
