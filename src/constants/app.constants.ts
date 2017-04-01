import {Injectable} from '@angular/core';

@Injectable()
export class AppConstant {

  //Default Service Config

  public BASE_URL = 'https://';
  public API_URL = 'https://api.tumblr.com/v2/blog/rasamapp.tumblr.com/posts/';
  public API_KEY = '?api_key=OrAgIdFzUWPdrFrhsmXEEHkGESgF2RBdPTwAnzoIr9Gtlj5wNR';
  public REQUEST_LIMIT = 10;




 // https://api.tumblr.com/v2/blog/citriccomics.tumblr.com/posts/text?api_key={key}


 // $scope.proxy + $scope.api_url + $scope.reqparams + '?api_key=' + $scope.api_key +'&tag=featured&limit=2')

 // public BASE_TUMBLR_URL = this.API_URL +  this.API_KEY + '&tag=featured&limit=10';


  constructor() {

  }

}
