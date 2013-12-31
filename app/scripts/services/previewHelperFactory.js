'use strict';

angular.module('achan.previewer').factory('previewHelperFactory',
    function (imagePreviewService, imgurPreviewService, twitterPreviewService, redditPreviewService) {
  function endsWith(string, suffix) {
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
  }

  function matchesDomain(url, regex) {
    return url.match(new RegExp(regex));
  }

  function isImage(src) {
    return endsWith(src, '.jpg') || endsWith(src, '.jpeg') || endsWith(src, '.png') ||
        endsWith(src, '.gif') || endsWith(src, '.bmp');
  }

  function isImgurLink(src) {
    var matching = matchesDomain(src, /https?:\/\/(www\.)?imgur\.com/);
    return matching;
  }

  function isTwitterLink(src) {
    return matchesDomain(src, /https?:\/\/(www\.)?twitter\.com/);
  }

  function isRedditLink(src) {
    return matchesDomain(src, /https?:\/\/(www\.)?reddit\.com/);
  }

  var NoOpHelper = function () {
    return {
      render: function () {
      }
    };
  };

  var forSource = function (src) {
    if (isImage(src)) {
      return imagePreviewService.forSource(src);
    }

    if (isImgurLink(src)) {
      return imgurPreviewService.forSource(src);
    }

    if (isTwitterLink(src)) {
      return twitterPreviewService.forSource(src);
    }

    if (isRedditLink(src)) {
      return redditPreviewService.forSource(src);
    }

    return new NoOpHelper();
  };

  return {
    forSource: forSource
  };
});
