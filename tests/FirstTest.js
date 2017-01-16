/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to nightwatchjs.org and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
  'Test Nightwatch Open Browser' : function (client) {
    client
      .url('http://nightwatchjs.org')
      .waitForElementPresent('body', 1000);
  },


'Logo click' : function(client) {
    client
      .click('.logo-small a')
      .pause(1000)
      .assert.title('Nightwatch.js | Node.js powered End-to-End testing framework')
      .assert.containsText(".logo-small a",'v0.9.11');

    
  },


  'Home click' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .assert.title('Nightwatch.js | Node.js powered End-to-End testing framework');
      
  },
   
  'Getting Started' : function(client) {
    client
      .pause(1000)
      .click('a[href="/getingstarted"]')
      .assert.title('Getting Started | Nightwatch.js');
    },

  'Developer Guide' : function(client) {
    client
      .pause(1000)
      .click('a[href="/guide"]')
      .assert.title('Developer Guide | Nightwatch.js')
      .assert.containsText("#using-nightwatch",'Using Nightwatch');
  
  },

  'API Reference' : function(client) {
    client
      .pause(1000)
      .click('a[href="/api"]')
      .assert.title('API Reference | Nightwatch.js')
      .assert.containsText("#expect-api",'Expect');
  },

'Blog' : function(client) {
    client
      .pause(1000)
      .click('a[href="/blog"]')
      .assert.title('Nightwatch.js | Nightwatch.js Blog');
      
  },

'click NightCloud.io' : function(client) {
  
    client      
    .click('a[href="/"]')
    .pause(3000)
    .click('a[href="http://nightcloud.io"]')
    
            .window_handles(function(result) {
                var temp = result.value[1];
                this.switchWindow(temp);
            })
            
    .assert.urlContains('http://nightcloud.io')
    .pause(5000);
    },

'Contac' : function(client) {
    client
      .url('http://nightwatchjs.org')
      .pause(1000)
      .click('a[href="/contact"]')
      .assert.title('Contact | Nightwatch.js');
      
  },


'Test name Nightwatch.js' : function(client) {
    client
      .url('http://nightwatchjs.org')
      .pause(1000)
      .assert.containsText(".col-lg-7 h1 span",'Nightwatch.js');
      

    
  },

  'Verify Text Browser automated testing done easy ' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .assert.containsText(".col-lg-7 p",'Browser automated testing done easy.');
    

    },
 


'Download button  click' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .click('a[href="https://github.com/nightwatchjs/nightwatch/archive/v0.9.11.zip"]');
      
      
  },

'Github button  click' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .click('a[href="https://github.com/nightwatchjs/nightwatch"]');
     
      
  },


'Verify Browser Automation title' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .assert.containsText(".col-sm-8.col-lg-10 h2",'Browser Automation');
   
  },


'Click on W3C WebDriver API' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .click('a[href="https://www.w3.org/TR/webdriver/"]');
   
  },

 

  'Click on CloudTesting SauceLabs' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .click('a[href="https://saucelabs.com/"]');
   
  },

'Click on BrowserStack' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .click('a[href="http://www.browserstack.com/"]');
   
  },

  'Verify Demo Test title' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .assert.containsText(".container.example.container div.row h2",'Demo Test');
   
  },


'Verify Text and Learn more button click' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .assert.containsText(".col-lg-9",'Run and manage your Nightwatch tests with absolutely no hassle, no config, no nonsense.')
      .click('.col-lg-3 p');
      
  },

 'Verify Stayed Updated and @nightwatch twitter Link' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .assert.containsText(".container.twitter div.row h2",'Stay Updated')
      .click('a[href="https://twitter.com/nightwatchjs"]');
      
      
  },

  'Verify Follow twitter Button' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .click('.container.twitter div.row a.btn.btn-primary.btn-lg.btn-twitter')
      .end();
  },







/* Pruebas Pendientes
  'Verify Main Features title' : function(client) {
    client
      .click('a[href="/"]')
      .pause(1000)
      .assert.containsText(".container.index-features div.row h2",'Main Features');
   
  },
 */
 
  
};
