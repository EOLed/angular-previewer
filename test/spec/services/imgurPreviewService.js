'use strict';

describe('Service: imgurPreviewService', function () {

  // load the service's module
  beforeEach(module('achan.previewer'));

  // instantiate service
  var helper, imageHelper;
  beforeEach(inject(function (imgurPreviewService, imagePreviewService) {
    helper = imgurPreviewService.forSource('http://imgur.com/q3OpgxF');
    imageHelper = imagePreviewService.forSource('http://i.imgur.com/q3OpgxF.jpg');
  }));

  it('converts to imgur jpg with imagePreviewService', function () {
    expect(angular.toJson(helper)).toEqual(angular.toJson(imageHelper));
  });
});
