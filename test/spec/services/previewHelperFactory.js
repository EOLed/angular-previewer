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
      expect(previewHelperFactory.getHelper('hello.jpg')).toEqual(imagePreviewerService);
    });

    it('returns imagePreviewerService for png', function () {
      expect(previewHelperFactory.getHelper('hello.png')).toEqual(imagePreviewerService);
    });

    it('returns imagePreviewerService for jpeg', function () {
      expect(previewHelperFactory.getHelper('hello.jpeg')).toEqual(imagePreviewerService);
    });

    it('returns imagePreviewerService for bmp', function () {
      expect(previewHelperFactory.getHelper('hello.bmp')).toEqual(imagePreviewerService);
    });

    it('returns imagePreviewerService for gif', function () {
      expect(previewHelperFactory.getHelper('hello.gif')).toEqual(imagePreviewerService);
    });
  });
});
