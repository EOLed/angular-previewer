'use strict';

describe('Service: imagePreviewerService', function () {

  // load the service's module
  beforeEach(module('achan.previewer'));

  // instantiate service
  var imagePreviewerService;
  beforeEach(inject(function (_imagePreviewerService_) {
    imagePreviewerService = _imagePreviewerService_;
  }));

  describe('render', function () {
    var img;
    beforeEach(function () {
      img = angular.element(imagePreviewerService.render('hello.jpg'));
    });

    it('creates img tag with src as src', function () {
      expect(img.attr('src')).toEqual('hello.jpg');
    });

    it('adds img-responsive class to img', function () {
      expect(img.hasClass('img-responsive')).toBeTruthy();
    });
  });
});
