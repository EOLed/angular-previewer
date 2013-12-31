'use strict';

describe('Service: Redditpreviewservice', function () {

  // load the service's module
  beforeEach(module('achan.snuownd'));
  beforeEach(module('achan.previewer'));

  // instantiate service
  var redditPreviewService, scope, element, $httpBackend;
  beforeEach(inject(function (_redditPreviewService_, $rootScope, _$httpBackend_) {
    redditPreviewService  = _redditPreviewService_.forSource('http://www.reddit.com/r/nba');
    scope = $rootScope.$new();
    element = angular.element('<div></div>');
    $httpBackend = _$httpBackend_;
  }));

  describe('fetches subreddit about info successfully', function () {
    beforeEach(function () {
      var subredditResponse = {
        data: {
          title: 'NBA',
          description: '**hello**',
          subscribers: 12345,
          url: '/r/nba'
        }
      };

      $httpBackend.expectJSONP('http://www.reddit.com/r/nba/about.json?jsonp=JSON_CALLBACK')
          .respond(200, subredditResponse);
      redditPreviewService.render(scope, element);
      $httpBackend.flush();
    });

    it('displays the body html', function () {
      expect(element.html()).toContain('hello');
    });
  });
});
