'use strict';

describe('Service: twitterPreviewService', function () {

  // load the service's module
  beforeEach(module('achan.previewer'));

  // instantiate service
  var twitterPreviewService, element, scope, $httpBackend;
  beforeEach(inject(function (_twitterPreviewService_, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    element = angular.element('<div></div>');
    $httpBackend = _$httpBackend_;
    $httpBackend.expectJSONP('https://api.twitter.com/1/statuses/oembed.json?callback=JSON_CALLBACK&id=415619')
        .respond(200, { html: '<blockquote class="twitter-client">embedded tweet</blockquote>' });
    twitterPreviewService = _twitterPreviewService_.forSource('https://twitter.com/Hoya2aPacer/status/415619');
    twitterPreviewService.render(scope, element);
  }));

  describe('fetches oembed twitter post from twitter api', function () {
    beforeEach(function () {
      $httpBackend.flush();
    });

    it('contains html returned from oembed response', function () {
      expect(element.find('blockquote').text()).toEqual('embedded tweet');
    });
  });
});
