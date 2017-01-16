module.exports = function (browser) {
 
   this.goToPage = function() {
    browser
      //.windowMaximize()
      .url('https://www.cfmiami.com/')
    
      .waitForElementVisible('body', 1000);
    return browser;
  };

   this.navigatePage = function() {
    browser
      .assert.title('Continental Farms | Fast. 24/7. Flowers for The Trade.');
  
    return browser;
  };
  
   this.menu_ourflowers_roses = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/category/roses/"]')
      .pause(5000) 
      .assert.containsText('#title-search.h3', 'ROSES');
    return browser;
  };

//
   this.menu_ourflowers_carnations = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/category/carnations/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'CARNATIONS');
    return browser;
  };

//
   this.menu_ourflowers_alstroemeria = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/category/alstroemeria/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'ALSTROEMERIA');
    return browser;
  };


   this.menu_ourflowers_chrysanthemums = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/category/chrysanthemums/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'CHRYSANTHEMUMS');
    return browser;
  };

   this.menu_ourflowers_fillers = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/category/fillers/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'FILLERS');

    return browser;
  };

   

   this.menu_ourflowers_foliage_greens = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/category/foliage-greens/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'FOLIAGE & GREENS');
    return browser;
  };
 
  this.menu_ourflowers_lilies = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/category/lilies/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'LILIES');
    return browser;
  };

   this.menu_ourflowers_other_flowers = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/category/other-flowers/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'OTHER FLOWERS');
    return browser;
  };

  this.menu_ourflowers_fall_collection = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/collection/fall-collection/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'FALL COLLECTION');
    return browser;
  };


  this.menu_ourflowers_from_tropics = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/collection/from-the-tropics/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'FROM THE TROPICS');
    return browser;
  };

  this.menu_ourflowers_from_tropics = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/collection/from-the-tropics/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'FROM THE TROPICS');
    return browser;
  };

   this.menu_ourflowers_wedding_collection = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/collection/wedding-collection/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'WEDDING COLLECTION');
    return browser;
  };

  

    this.menu_ourflowers_whats_new = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/collection/whats-new/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'WHAT\'S NEW');
    return browser;
  };

    this.menu_ourflowers_winter_collection = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('a[href="https://www.cfmiami.com/collection/winter-collection/"]')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'WINTER COLLECTION');
    return browser;
  };  

   this.menu_ourflowers_favorites = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .click('#aaa')
      .pause(5000) 
      .assert.containsText('#title-search>h3', 'FAVORITE FLOWERS');
    return browser;
  };  

    this.menu_ourflowers_color_yellow = function() {
    browser
      .useCss()
      .moveToElement('#menu-item-10',  0,  0)
      .mouseButtonDown(0)
      .pause(5000) 
      .assert.containsText('.shop-by-color', 'SHOW FLOWERS')
      .pause(5000) 
      .click('.shop-by-color')
      .click('.show-flowers')
      .pause(10000)
      .assert.containsText('#title-search>h3', 'CATALOG SEARCH RESULT')
      .pause(5000) ;
    return browser;
  };  

};