import {Component} from '@angular/core';

import {NavParams, Events} from 'ionic-angular';
import {TranslateService} from 'ng2-translate';
import {AppConstant} from '../../constants/app.constants';

import {HomePage} from '../home/home';
import {VideoPage} from '../video/video';
import {PhotoPage} from '../photo/photo';
import {TextPage} from '../text/text';
import {LinkPage} from '../links/link';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = VideoPage;
  tab3Root: any = PhotoPage;
  tab4Root: any = TextPage;
  tab5Root: any = LinkPage;
  mySelectedIndex: number;

  //text

  homeText:any ;

  constructor(navParams: NavParams,
              private events: Events,
              private translate: TranslateService,
              private appConstant: AppConstant) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }


  ngOnInit() {


   // this.homeText = this.translate.get('MENU.HOME');


    this.events.subscribe(this.appConstant.EVENT_APP_LANGUAGE_CHANGED, () => {
      this.translate.get('MENU.HOME').subscribe((text: string) => {
        this.homeText = text;
        console.log(text);
      });

    });


  }


}
