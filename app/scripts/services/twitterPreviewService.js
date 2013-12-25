'use strict';

angular.module('achan.previewer').service('twitterPreviewService', function ($http) {
  function extractTweetIdFromSrc(src) {
    return src.substring(src.lastIndexOf('/') + 1);
  }

  var Helper = function (src) {
    var render = function (scope, element) {
      var tweetId = extractTweetIdFromSrc(src);
      $http.jsonp('https://api.twitter.com/1/statuses/oembed.json?callback=JSON_CALLBACK&id=' + tweetId)
          .success(function (data) {
        element.html(data.html);
      });
    };

    return {
      render: render
    };
  };

  function newHelper(src) {
    return new Helper(src);
  }

  return {
    newHelper: newHelper
  };
});
