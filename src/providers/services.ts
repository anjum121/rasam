import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {AppConstant} from '../constants/app.constants'

@Injectable()
export class ApiServices {

  constructor(public http: Http, public appConstant:AppConstant) {
    console.log('Hello Services Provider');
  }


  getItem(request){

    let URL =  this.appConstant.API_URL + request.type + this.appConstant.API_KEY + '&limit='+this.appConstant.REQUEST_LIMIT;

    return new Promise((reslove, reject) => {

      this.http.get(URL)
        .map(res => res.json())
        .subscribe(data => {
            reslove(data.response.posts);
          }, (err) => {
            reject(err)
          }
        );


    });
  }


}
