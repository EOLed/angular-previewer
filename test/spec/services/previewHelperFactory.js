'use strict';

describe('Service: previewHelperFactory', function () {

  // load the service's module
  beforeEach(module('achan.snuownd'));
  beforeEach(module('achan.previewer'));

  // instantiate service
  var previewHelperFactory, imagePreviewerService, twitterPreviewService, redditPreviewService;
  beforeEach(inject(function (_previewHelperFactory_, _imagePreviewerService_, _twitterPreviewService_,
      _redditPreviewService_) {
    imagePreviewerService = _imagePreviewerService_;
    previewHelperFactory = _previewHelperFactory_;
    twitterPreviewService = _twitterPreviewService_;
    redditPreviewService = _redditPreviewService_;
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

    it('returns imagePreviewerService for imgur link', function () {
      expect(angular.toJson(previewHelperFactory.newHelper('http://imgur.com/q3OpgxF')))
          .toEqual(angular.toJson(imagePreviewerService.newHelper('http://i.imgur.com/q3OpgxF.jpg')));
    });

    it('returns twitterPreviewService for twitter link', function () {
      expect(angular.toJson(previewHelperFactory.newHelper('https://twitter.com/Hoya2aPacer/status/5894272')))
          .toEqual(angular.toJson(twitterPreviewService.newHelper('https://twitter.com/Hoya2aPacer/status/5894272')));
    });

    it('returns redditPreviewService for reddit link', function () {
      expect(angular.toJson(previewHelperFactory.newHelper('http://www.reddit.com/r/nba')))
          .toEqual(angular.toJson(redditPreviewService.newHelper('http://www.reddit.com/r/nba')));
    });

    describe('unsupported link', function () {
      var noOpHelper;
      beforeEach(function () {
        noOpHelper = previewHelperFactory.newHelper('not supported');
      });

      it('returns noop helper', function () {
        expect(!!noOpHelper);
      });

      it('has a render function', function () {
        noOpHelper.render();
      });
    });
  });
});
