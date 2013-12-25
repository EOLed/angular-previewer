'use strict';

describe('Service: imagePreviewerService', function () {

  // load the service's module
  beforeEach(module('achan.previewer'));

  // instantiate service
  var helper, scope;
  beforeEach(inject(function (imagePreviewerService, $rootScope) {
    helper = imagePreviewerService.newHelper('hello.jpg');
    scope = $rootScope.$new();
  }));

  describe('render', function () {
    var img, element;

    beforeEach(function () {
      element = angular.element('<div></div>');
      helper.render(scope, element);
      img = element.find('img');
    });

    it('creates img tag with src as src', function () {
      expect(img.attr('src')).toEqual('hello.jpg');
    });

    it('adds img-responsive class to img', function () {
      expect(img.hasClass('img-responsive')).toBeTruthy();
    });
  });
});
