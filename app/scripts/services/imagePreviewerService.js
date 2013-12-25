'use strict';

angular.module('achan.previewer').service('imagePreviewerService', function () {
  var renderFn = function (src) {
    return '<img src="' + src + '" />';
  };

  return {
    render: renderFn
  };
});
