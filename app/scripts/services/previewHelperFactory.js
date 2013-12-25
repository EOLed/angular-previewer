'use strict';

angular.module('achan.previewer').factory('previewHelperFactory',
    function (imagePreviewerService, imgurPreviewerService) {
  function endsWith(string, suffix) {
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
  }

  function isImage(src) {
    return endsWith(src, '.jpg') || endsWith(src, '.jpeg') || endsWith(src, '.png') ||
        endsWith(src, '.gif') || endsWith(src, '.bmp');
  }

  function isImgurLink(src) {
    return src.indexOf('http://imgur.com') !== -1;
  }

  var newHelper = function (src) {
    if (isImage(src)) {
      return imagePreviewerService.newHelper(src);
    }

    if (isImgurLink(src)) {
      return imgurPreviewerService.newHelper(src);
    }
  };

  return {
    newHelper: newHelper
  };
});
