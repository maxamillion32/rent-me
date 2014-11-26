'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('rentMe App', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element(by.css('h1')).isPresent()).toBe(true);
    });

    it('should render a list of localities', function() {
      expect(element(by.css('ul')).isPresent()).toBe(true);
      expect(element(by.css('ul li')).isPresent()).toBe(true);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
