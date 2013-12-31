'use strict';

angular.module('achan.previewer').service('imagePreviewService', function () {
  var source;
  var ImagePreviewService = {
    render: function (scope, element) {
      element.html('<img src="' + source + '" class="img-responsive" />');
    },
    forSource: function (src) {
      source = src;
      return ImagePreviewService;
    }
  };

  return ImagePreviewService;
});
