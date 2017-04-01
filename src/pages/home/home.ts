import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';


import {ApiServices} from '../../providers/services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  videos: any;
  request = {
    type: 'video',
    offset: 0
  };


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sanitizer: DomSanitizer,
              public apiServices: ApiServices) {


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getVideos();
  }


  getVideos() {
    this.apiServices.getItem(this.request).then((data) => {
      this.videos = data;
      console.log(data)
    }, (err) => {
      console.log("not allowed");
    });
  }


  showMedia(item){
      console.log(item)
  }


}
