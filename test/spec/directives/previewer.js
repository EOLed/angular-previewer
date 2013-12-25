'use strict';

describe('Directive: previewer', function () {

  // load the directive's module
  beforeEach(module('achan.previewer'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    scope.url = 'me.jpg';
    element = angular.element('<asc-previewer src="url"></asc-previewer>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('img').attr('src')).toBe('me.jpg');
  }));
});
