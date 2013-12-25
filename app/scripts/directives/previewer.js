'use strict';

angular.module('achan.previewer', [])
  .directive('ascPreviewer', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the previewer directive');
      }
    };
  });
