import {Component} from '@angular/core';
import {ModalController, Events} from 'ionic-angular';
import {TranslateService} from 'ng2-translate';
import {AppConstant} from '../../constants/app.constants';
import {ApiServices} from '../../providers/services';
import {PopupPage} from '../popup/popup';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {

  private start: number = 0;
  homeText: any;

  public items: any = [];
  request = {
    type: 'video',
    offset: 0
  };

  constructor(
    public modalController: ModalController,
    public apiServices: ApiServices,
    private events: Events,
    private translate: TranslateService,
    private appConstant: AppConstant) {
  }


  ngOnInit() {
    this.events.subscribe(this.appConstant.EVENT_APP_LANGUAGE_CHANGED, () => {
      this.translate.get('MENU.HOME').subscribe((text: string) => {
        this.homeText = text;
      });

    });

  }

  ionViewDidLoad() {
    this.loadData();
  }


  loadData() {
    return new Promise(resolve => {
      this.apiServices.getItem(this.request).then((data: any) => {
        for (let item of data.posts) {
          this.items.push(item);
        }
        resolve(true);
      });
    });

  }

  doInfinite(infiniteScroll: any) {
    console.log('doInfinite, start is currently ' + this.request.offset);

    this.request.offset += 10;
    this.loadData().then(() => {
      infiniteScroll.complete();
    });

  }


  showMedia(item) {
    let modal = this.modalController.create(PopupPage, {item: item});
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

}
