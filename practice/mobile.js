/**
 * Sample automated test scenario for Nightwatch.js from
 *  http://g00glen00b.be/e2e-testing-nightwatch-js/
 *  test Page http://todomvc.com/examples/angularjs/#/
 *  it navigates to google.com and searches for nightwatch,
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
      .assert.containsText(".logo-small a",'v0.9.9');

    
  },

};
