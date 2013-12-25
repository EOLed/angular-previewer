'use strict';

angular.module('achan.previewer').factory('previewHelperFactory',
    function (imagePreviewerService, imgurPreviewerService, twitterPreviewService) {
  function endsWith(string, suffix) {
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
  }

  function isImage(src) {
    return endsWith(src, '.jpg') || endsWith(src, '.jpeg') || endsWith(src, '.png') ||
        endsWith(src, '.gif') || endsWith(src, '.bmp');
  }

  function isImgurLink(src) {
    var imgurUrlRegex  =  new RegExp(/https?:\/\/(www\.)?imgur\.com/);
    return src.match(imgurUrlRegex);
  }

  function isTwitterLink(src) {
    var twitterUrlRegex =  new RegExp(/https?:\/\/(www\.)?twitter\.com/);
    return src.match(twitterUrlRegex);
  }

  var newHelper = function (src) {
    if (isImage(src)) {
      return imagePreviewerService.newHelper(src);
    }

    if (isImgurLink(src)) {
      return imgurPreviewerService.newHelper(src);
    }

    if (isTwitterLink(src)) {
      return twitterPreviewService.newHelper(src);
    }
  };

  return {
    newHelper: newHelper
  };
});
