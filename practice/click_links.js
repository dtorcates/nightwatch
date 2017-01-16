/* jshint expr: true */

module.exports = {
  'demo test google' : function (client) {
    client
      .url('http://nightwatchjs.org')
      .waitForElementPresent('body', 1000);
  },

  'part two' : function(client) {
    client
      .pause(1000)
      .assert.cssClassPresent("#logo-small","logo-small")
      //.assert.containsText("#col-lg-7",'Overview')
      .end();
  }
};