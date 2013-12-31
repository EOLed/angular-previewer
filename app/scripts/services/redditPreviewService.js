/* jshint camelcase: false */
'use strict';

angular.module('achan.previewer').service('redditPreviewService', function ($http, snuowndService) {
  function extractSubredditFromSrc(src) {
    return src.substring(src.indexOf('/r/') + 3);
  }

  var source;
  var RedditPreviewService = {
    forSource: function (src) {
      source = src;
      return RedditPreviewService;
    },
    render: function (scope, element) {
      var subreddit = extractSubredditFromSrc(source);
      $http.jsonp('http://www.reddit.com/r/' + subreddit + '/about.json?jsonp=JSON_CALLBACK')
          .success(function (data) {
        element.html(snuowndService.render(data.data.description));
      });
    }
  };

  return RedditPreviewService;
});
