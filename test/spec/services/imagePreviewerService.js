'use strict';

describe('Service: imagePreviewerService', function () {

  // load the service's module
  beforeEach(module('achan.previewer'));

  // instantiate service
  var helper;
  beforeEach(inject(function (imagePreviewerService) {
    helper = imagePreviewerService.newHelper('hello.jpg');
  }));

  describe('render', function () {
    var img;
    beforeEach(function () {
      img = angular.element(helper.render());
    });

    it('creates img tag with src as src', function () {
      expect(img.attr('src')).toEqual('hello.jpg');
    });

    it('adds img-responsive class to img', function () {
      expect(img.hasClass('img-responsive')).toBeTruthy();
    });
  });
});
