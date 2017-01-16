module.exports = function (browser) {
 
   this.goToPage = function() {
    browser
      //.windowMaximize()
      .url('https://tree.taiga.io/login?next=%252Fdiscover')
      .waitForElementVisible('body', 5000);
    return browser;
  };

  

   this.login = function() {
     var data = browser.globals.variables;
    browser
      .useCss()
      .waitForElementVisible('body', 10000)
      .waitForElementVisible('input[name=username]', 5000)
      .waitForElementVisible('input[name=password]', 5000)
      .waitForElementVisible('.button-green.submit-button', 5000)
      .setValue('input[name=username]', data.user)
      .setValue('input[name=password]', data.password)
      .submitForm('.button-green.submit-button')
      .pause(5000);
     return browser;

   };

   this.menu_plan = function() {
    browser
      .useCss()
      .pause(5000)
      .assert.containsText('.discover-header','DISCOVER PROJECTS')
      .moveToElement('.topnav-dropdown-wrapper',  0,  0)
      .mouseButtonDown(0)
      .pause(3000)
      .click ('a[href="/projects"]')
      .pause(3000)
      .assert.containsText('.project-list-title','MY PROJECTS')
      .pause(3000)
      .assert.containsText('.project-title','ISQTB Plan')
      .pause(3000)
      .click('.project-title')
      .pause(5000);
    return browser;
  };

//
   this.menu_search = function() {
    browser
      .useCss()
      .waitForElementVisible('body', 5000)
      .pause(5000) 
      .click('#nav-wiki')
      
      
      .assert.containsText('.wiki-title', 'home')
      .click('.markItUpButton.markItUpButton1')
      .click('.markItUpButton.markItUpButton2')
      .click('.markItUpButton.markItUpButton3')
      .click('.markItUpButton.markItUpButton4')
      .click('.markItUpButton.markItUpButton5')
      .click('.markItUpButton.markItUpButton6')
      .click('.markItUpButton.markItUpButton7')
      .click('.markItUpButton.markItUpButton8')
      .click('.markItUpButton.markItUpButton11')
      .click('.markItUpButton.markItUpButton12')
      .click('.markItUpButton.markItUpButton13.preview-icon')
      .click('.save')
      
      .pause(30000);
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