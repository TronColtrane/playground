/*global angular:true */

(function(){
  var app = angular.module('sorcererApp', [ ]);

  app.controller('sorcererController', function(){
    this.links = links;
  });

  var links = [
  {
    name: 'Sorcerer Soundcloud',
    url: 'http://www.soundcloud.com/sorcerermusic'
  },
  {
    name: 'Sorcerer Tumblr',
    url: 'http://www.sorcerermusic.tumblr.com'
  },
  {
    name: 'Sorcerer Facebook',
    url: 'https://www.facebook.com/Sorcerer-music-146150358740324/'
  }
];
})();
