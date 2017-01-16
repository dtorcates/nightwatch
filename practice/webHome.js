module.exports = function (browser) {
  this.goToTanmay = function() {
    browser
      .windowMaximize()
      .url('http://demo.tanmaysarkar.com/')
      .waitForElementVisible('body', 1000);
    return browser;
  };
  this.navigateSample01 = function() {
    browser
      .click('div>p:nth-child(1)>a')
      .waitForElementVisible('#ts_first_name', 3000)
      .assert.containsText('.style1>strong', 'Testing');
    return browser;
  };
  this.validateheader = function() {
    browser
      .assert.containsText('.style1>strong', 'Testing');
    return browser;
  };
};