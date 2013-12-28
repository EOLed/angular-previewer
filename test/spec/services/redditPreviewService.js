'use strict';

describe('Service: Redditpreviewservice', function () {

  // load the service's module
  beforeEach(module('achan.snuownd'));
  beforeEach(module('achan.previewer'));

  // instantiate service
  var helper, scope, element, $httpBackend;
  beforeEach(inject(function (_redditPreviewService_, $rootScope, _$httpBackend_) {
    var redditPreviewService  = _redditPreviewService_;
    scope = $rootScope.$new();
    element = angular.element('<div></div>');
    helper = redditPreviewService.newHelper('http://www.reddit.com/r/nba');
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
      helper.render(scope, element);
      $httpBackend.flush();
    });

    it('displays the body html', function () {
      expect(element.html()).toContain('hello');
    });
  });
});
