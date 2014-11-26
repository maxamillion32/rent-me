'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('rentMe App', function() {

  browser.get('index.html');

  it('should automatically redirect to /where when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/where");
  });

  describe('localityView', function() {

    beforeEach(function() {
      browser.get('index.html#/where');
    });

    it('should render the locality view when user navigates to /where', function() {
      expect(element(by.css('h1')).isPresent()).toBe(true);
    });

    it('should render a list of localities', function() {
      expect(element(by.css('ul')).isPresent()).toBe(true);
      expect(element(by.css('ul li')).isPresent()).toBe(true);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/look-in/Wellington/15');
    });

    it('should display a list of properties when user navigates to page', function() {
      expect(element(by.repeater('property in properties.List').row(0)).isPresent()).toBe(true);
    });

  });
});
