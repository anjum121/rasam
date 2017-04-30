import {Injectable} from '@angular/core';
import {LanguageInfo} from '../dto/common.dto';
import {StorageService} from './storage'

@Injectable()
export class GlobalizationService {

  public LANGUAGE_en_US = 'en_US';
  public LANGUAGE_ml_IN = 'ml_IN';

  constructor(private  storageService: StorageService) {



  }

  getDeviceLanguage(): string {

    if(!this.storageService.get('LANGUAGE')){
      this.storageService.set('LANGUAGE', this.LANGUAGE_en_US);
    }

    return this.storageService.get('LANGUAGE');
  }

  saveDeviceLanguage(setLanguage: string): void {
    this.storageService.set('LANGUAGE', setLanguage);
  }

  getAvailableLanguages(): Array<LanguageInfo> {

    let languageList: Array<LanguageInfo> = [];

    let language1 = new LanguageInfo();
    language1.description = 'English';
    language1.code = this.LANGUAGE_en_US;
    languageList.push(language1);

    let language2 = new LanguageInfo();
    language2.description = 'മലയാളം';
    language2.code = this.LANGUAGE_ml_IN;
    languageList.push(language2);

    return languageList;
  }
}
