'use strict';

describe('Service: previewHelperFactory', function () {
  beforeEach(module('achan.snuownd'));
  beforeEach(module('achan.previewer'));

  // instantiate service
  var previewHelperFactory, imagePreviewService, twitterPreviewService, redditPreviewService;
  beforeEach(inject(function (_previewHelperFactory_, _imagePreviewService_,
      _twitterPreviewService_, _redditPreviewService_) {
    imagePreviewService = _imagePreviewService_;
    previewHelperFactory = _previewHelperFactory_;
    twitterPreviewService = _twitterPreviewService_;
    redditPreviewService = _redditPreviewService_;
  }));

  describe('getHelper()', function () {
    it('returns imagePreviewService for jpg', function () {
      expect(angular.toJson(previewHelperFactory.forSource('hello.jpg')))
          .toEqual(angular.toJson(imagePreviewService.forSource('hello.jpg')));
    });

    it('returns imagePreviewService for png', function () {
      expect(angular.toJson(previewHelperFactory.forSource('hello.png')))
          .toEqual(angular.toJson(imagePreviewService.forSource('hello.png')));
    });

    it('returns imagePreviewService for jpeg', function () {
      expect(angular.toJson(previewHelperFactory.forSource('hello.jpeg')))
          .toEqual(angular.toJson(imagePreviewService.forSource('hello.jpeg')));
    });

    it('returns imagePreviewService for bmp', function () {
      expect(angular.toJson(previewHelperFactory.forSource('hello.bmp')))
          .toEqual(angular.toJson(imagePreviewService.forSource('hello.bmp')));
    });

    it('returns imagePreviewService for gif', function () {
      expect(angular.toJson(previewHelperFactory.forSource('hello.gif')))
          .toEqual(angular.toJson(imagePreviewService.forSource('hello.gif')));
    });

    it('returns imagePreviewService for imgur link', function () {
      expect(angular.toJson(previewHelperFactory.forSource('http://imgur.com/q3OpgxF')))
          .toEqual(angular.toJson(imagePreviewService.forSource('http://i.imgur.com/q3OpgxF.jpg')));
    });

    describe('returns twitterPreviewService for twitter link', function () {
      var helper;

      beforeEach(function () {
        spyOn(twitterPreviewService, 'forSource').andCallThrough();
        helper = previewHelperFactory.forSource('https://twitter.com/Hoya2aPacer/status/5894272');
      });

      it('creates a helper for the source provided', function () {
        expect(twitterPreviewService.forSource)
            .toHaveBeenCalledWith('https://twitter.com/Hoya2aPacer/status/5894272');
      });

      it('fulfills the helper contract', function () {
        verifyHelperContract(helper);
      });
    });

    describe('returns redditPreviewService for reddit link', function () {
      var helper;

      beforeEach(function () {
        spyOn(redditPreviewService, 'forSource').andCallThrough();
        helper = previewHelperFactory.forSource('http://www.reddit.com/r/nba');
      });

      it('creates a helper for the source provided', function () {
        expect(redditPreviewService.forSource).toHaveBeenCalledWith('http://www.reddit.com/r/nba');
      });

      it('fulfills the helper contract', function () {
        verifyHelperContract(helper);
      });
    });

    describe('unsupported link', function () {
      var noOpHelper;
      beforeEach(function () {
        noOpHelper = previewHelperFactory.forSource('not supported');
      });

      it('returns noop helper', function () {
        expect(!!noOpHelper);
      });

      it('has a render function', function () {
        noOpHelper.render();
      });
    });
  });

  function verifyHelperContract(helperService) {
    describe('helper contract', function () {
      it('can render itself', function () {
        helperService.render();
      });
    });
  }
});
