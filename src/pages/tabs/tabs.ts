import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';
import {VideoPage} from '../video/video';
import {PhotoPage} from '../photo/photo';
import {TextPage} from '../text/text';
import {QuotePage} from '../quote/quote';

// import { SchedulePage } from '../schedule/schedule';
// import { SpeakerListPage } from '../speaker-list/speaker-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = VideoPage;
  tab3Root: any = PhotoPage;
  tab4Root: any = TextPage;
  tab5Root: any = QuotePage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
