'use strict';

angular.module('achan.previewer').service('imagePreviewerService', function () {
  var Helper = function (src) {
    var render = function () {
      return '<img src="' + src + '" class="img-responsive" />';
    };

    return {
      src: src,
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
