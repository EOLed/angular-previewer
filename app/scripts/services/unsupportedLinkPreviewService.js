'use strict';

angular.module('achan.previewer').service('unsupportedLinkPreviewService', function () {
  var source;
  var UnsupportedLinkPreviewService = {
    render: function (scope, element) {
      element.html('<em>No preview available.</em>');
    },
    forSource: function (src) {
      source = src;
      return UnsupportedLinkPreviewService;
    }
  };

  return UnsupportedLinkPreviewService;
});
