'use strict';

describe('Directive: previewer', function () {

  // load the directive's module
  beforeEach(module('achan.snuownd'));
  beforeEach(module('achan.previewer'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('previews jpgs', inject(function ($compile) {
    scope.url = 'me.jpg';
    element = angular.element('<asc-previewer src="url"></asc-previewer>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('img').attr('src')).toBe('me.jpg');
  }));

  it('previews single imgur links', inject(function ($compile) {
    scope.url = 'http://imgur.com/q3OpgxF';
    element = angular.element('<asc-previewer src="url"></asc-previewer>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('img').attr('src')).toBe('http://i.imgur.com/q3OpgxF.jpg');
  }));

  it('does nothing if no src is provided', inject(function ($compile) {
    element = angular.element('<asc-previewer src="url"></asc-previewer>');
    element = $compile(element)(scope);
    var html = element.html();
    scope.$digest();

    expect(element.html()).toEqual(html);
  }));
});
