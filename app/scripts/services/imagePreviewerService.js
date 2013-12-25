'use strict';

angular.module('achan.previewer').service('imagePreviewerService', function () {
  var renderFn = function (src) {
    return '<img src="' + src + '" class="img-responsive" />';
  };

  return {
    render: renderFn
  };
});
