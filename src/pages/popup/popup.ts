import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';

import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';

declare let SuperGif: any;

@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html'
})
export class PopupPage {

  @ViewChild(Slides) slides: Slides;


  mySlideOptions1: any;

  pageTitle: string;
  data: any;
  videoUrl: any;
  sup1: any;
  htmlText: any;

  videoCanBeHTML5: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sanitizer: DomSanitizer,
              public viewController: ViewController) {



    //this.slides.paginationType =
    //
    // setTimeout(() => {
    //
    //
    //   this.slides.paginationType = 'bullets';
    //   this.slides.paginationHide = false;
    //   // this.slides.freeModeSticky= true;
    //   // this.slides.freeMode= true;
    // }, 500);


    // this.slide = {
    //   paginationType : 'bullets',
    //   direction: 'vertical',
    //   loop: false,
    //   speed: 300,
    //   freeMode: true,
    //   freeModeSticky: true,
    //   slidesPerView: 3,
    //   spaceBetween: 60,
    //   effect: 'coverflow',
    //   coverflow: {
    //     rotate: -5,
    //     stretch: 0,
    //     depth: 50,
    //     modifier: 1,
    //     slideShadows: false
    //   }
    // };


  }

  ngOnInit() {
    this.data = this.navParams.data.item;
    console.log(this.data);
    this.initPage();

  }

  // ionViewDidLoad() {
  //   this.sup1 = new SuperGif({ gif: document.getElementById('example1') } );
  //   this.sup1.load();
  // }

  // pause(){
  //   this.sup1.pause()
  // }
  //
  // play(){
  //   this.sup1.play()
  // }

  dismiss() {
    let data = {'foo': 'bar'};
    this.viewController.dismiss(data);
  }

  initPage() {

    this.pageTitle = this.data.summary;
    this.videoCanBeHTML5 = false;


    if (this.data.video_type === 'tumblr') {
      this.videoCanBeHTML5 = true;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.video_url);
    }


    if (this.data.video_type === 'youtube') {
      let youtubeVideo = `https://www.youtube.com/embed/${this.data.video.youtube.video_id}?feature=player_embedded`;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeVideo);
    }

    // let videoUrl = this.sanitizer.bypassSecurityTrustHtml();


    if (this.data.type === 'text') {
      this.htmlText = this.data.trail[0].content_raw
    }


  }


}
