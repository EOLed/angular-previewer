'use strict';

angular.module('achan.previewer').service('twitterPreviewService', function ($http) {
  function extractTweetIdFromSrc(src) {
    return src.substring(src.lastIndexOf('/') + 1);
  }

  var source;
  var TwitterPreviewService = {
    forSource: function (src) {
      source = src;
      return TwitterPreviewService;
    },
    render: function (scope, element) {
      var tweetId = extractTweetIdFromSrc(source);
      $http.jsonp('https://api.twitter.com/1/statuses/oembed.json?callback=JSON_CALLBACK&id=' + tweetId)
          .success(function (data) {
        element.html(data.html);
      });
    }
  };

  return TwitterPreviewService;
});
