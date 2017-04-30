import {Component} from '@angular/core';
import {ModalController, Events, NavParams, NavController} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import {ApiServices} from '../../providers/services';
import {PopupPage} from '../popup/popup';


@Component({
  selector: 'page-text',
  templateUrl: 'text.html'
})
export class TextPage {
  private start: number = 0;
  public items: any = [];
  request = {
    type: 'text',
    offset: 0
  };


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sanitizer: DomSanitizer,
              public modalController: ModalController,
              public apiServices: ApiServices) {

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

    this.request.offset += 1;
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
