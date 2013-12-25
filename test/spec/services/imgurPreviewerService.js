'use strict';

describe('Service: imgurPreviewerService', function () {

  // load the service's module
  beforeEach(module('achan.previewer'));

  // instantiate service
  var helper, imageHelper;
  beforeEach(inject(function (imgurPreviewerService, imagePreviewerService) {
    helper = imgurPreviewerService.newHelper('http://imgur.com/q3OpgxF');
    imageHelper = imagePreviewerService.newHelper('http://i.imgur.com/q3OpgxF.jpg');
  }));

  it('converts to imgur jpg with imagePreviewerService', function () {
    expect(angular.toJson(helper)).toEqual(angular.toJson(imageHelper));
  });
});
