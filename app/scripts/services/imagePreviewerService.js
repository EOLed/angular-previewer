'use strict';

angular.module('achan.previewer').service('imagePreviewerService', function () {
  var Helper = function (src) {
    var render = function (scope, element) {
      element.html('<img src="' + src + '" class="img-responsive" />');
    };

    return {
      render: render
    };
  };

  function newHelper(src) {
    return new Helper(src);
  }

  return {
    newHelper: newHelper
  };
});
