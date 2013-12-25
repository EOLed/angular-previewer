'use strict';

describe('Directive: previewer', function () {

  // load the directive's module
  beforeEach(module('achan.previewer'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<asc-previewer></asc-previewer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the previewer directive');
  }));
});
