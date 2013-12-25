'use strict';

angular.module('achan.previewer').factory('previewHelperFactory', function (imagePreviewerService) {
  function endsWith(string, suffix) {
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
  }

  function isImage(src) {
    return endsWith(src, '.jpg') || endsWith(src, '.jpeg') || endsWith(src, '.png') ||
        endsWith(src, '.gif') || endsWith(src, '.bmp');
  }

  var getHelper = function (src) {
    if (isImage(src)) {
      return imagePreviewerService;
    }
  };

  return {
    getHelper: getHelper
  };
});
