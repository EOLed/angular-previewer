'use strict';

describe('Service: UnsupportedLinkPreviewService', function () {

  // load the service's module
  beforeEach(module('achan.previewer'));

  // instantiate service
  var unsupportedLinkPreviewService, element, scope;
  beforeEach(inject(function (_unsupportedLinkPreviewService_, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<div></div>');
    unsupportedLinkPreviewService = _unsupportedLinkPreviewService_.forSource('http://random.com');
    unsupportedLinkPreviewService.render(scope, element);
  }));

  it('indicates that no preview is available', function () {
    expect(element.text()).toEqual('No preview available.');
  });
});
