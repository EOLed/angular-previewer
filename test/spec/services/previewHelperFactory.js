'use strict';

describe('Service: Previewhelperfactory', function () {

  // load the service's module
  beforeEach(module('achan.previewer'));

  // instantiate service
  var previewHelperFactory, imagePreviewerService;
  beforeEach(inject(function (_previewHelperFactory_, _imagePreviewerService_) {
    imagePreviewerService = _imagePreviewerService_;
    previewHelperFactory = _previewHelperFactory_;
  }));

  describe('getHelper()', function () {
    it('returns imagePreviewerService for jpg', function () {
      expect(angular.toJson(previewHelperFactory.newHelper('hello.jpg')))
          .toEqual(angular.toJson(imagePreviewerService.newHelper('hello.jpg')));
    });

    it('returns imagePreviewerService for png', function () {
      expect(angular.toJson(previewHelperFactory.newHelper('hello.png')))
          .toEqual(angular.toJson(imagePreviewerService.newHelper('hello.png')));
    });

    it('returns imagePreviewerService for jpeg', function () {
      expect(angular.toJson(previewHelperFactory.newHelper('hello.jpeg')))
          .toEqual(angular.toJson(imagePreviewerService.newHelper('hello.jpeg')));
    });

    it('returns imagePreviewerService for bmp', function () {
      expect(angular.toJson(previewHelperFactory.newHelper('hello.bmp')))
          .toEqual(angular.toJson(imagePreviewerService.newHelper('hello.bmp')));
    });

    it('returns imagePreviewerService for gif', function () {
      expect(angular.toJson(previewHelperFactory.newHelper('hello.gif')))
          .toEqual(angular.toJson(imagePreviewerService.newHelper('hello.gif')));
    });
  });
});
