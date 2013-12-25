'use strict';

angular.module('achan.previewer', []).directive('ascPreviewer', function (previewHelperFactory) {
  return {
    template: '<div class="asc-previewer"></div>',
    restrict: 'E',
    scope: {
      'src': '='
    },
    link: function postLink(scope, element) {
      scope.$watch('src', function (src) {
        element.html(previewHelperFactory.newHelper(src).render());
      });
    }
  };
});
