/* jshint camelcase: false */
'use strict';

angular.module('achan.previewer').service('redditPreviewService', function ($http, snuowndService) {
  function extractSubredditFromSrc(src) {
    return src.substring(src.indexOf('/r/') + 3);
  }

  var Helper = function (src) {
    var render = function (scope, element) {
      var subreddit = extractSubredditFromSrc(src);
      $http.jsonp('http://www.reddit.com/r/' + subreddit + '/about.json?jsonp=JSON_CALLBACK')
          .success(function (data) {
        element.html(snuowndService.render(data.data.description));
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
