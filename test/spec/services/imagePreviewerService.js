'use strict';

describe('Service: imagePreviewerService', function () {

  // load the service's module
  beforeEach(module('achan.previewer'));

  // instantiate service
  var imagePreviewerService;
  beforeEach(inject(function (_imagePreviewerService_) {
    imagePreviewerService = _imagePreviewerService_;
  }));

  it('should do something', function () {
    expect(!!imagePreviewerService).toBe(true);
  });

});
