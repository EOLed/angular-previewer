'use strict';

angular.module('achan.previewer').service('imgurPreviewService', function (imagePreviewService) {
  var ImgurPreviewService = {
    render: imagePreviewService.render,
    forSource: function (src) {
      var imgurId = src.substring(src.lastIndexOf('/') + 1);
      return imagePreviewService.forSource('http://i.imgur.com/' + imgurId + '.jpg');
    }
  };

  return ImgurPreviewService;
});
