'use strict';

angular.module('achan.previewer').service('imgurPreviewerService', function (imagePreviewerService) {
  function newHelper(src) {
    var imgurId = src.substring(src.lastIndexOf('/') + 1);
    return imagePreviewerService.newHelper('http://i.imgur.com/' + imgurId + '.jpg');
  }

  return {
    newHelper: newHelper
  };
});
