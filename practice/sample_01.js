module.exports = function (browser) {
  this.fillForm = function() {
    browser
      .setValue('#ts_first_name', 'tanmay')
      .setValue('#ts_last_name', 'sarkar')
      .setValue('#ts_address', 'home address')
      .execute('document.getElementById("ts_country").options[1].selected=true')
      .click('html>body>form>table>tbody>tr>td>p>label:nth-child(1)>input')
      .click('#ts_checkbox1')
      .click('#ts_checkbox3');
    return browser;
  };
  this.backhome = function() {
    browser
      .click('html>body>p>a')
      .waitForElementVisible('.style1>strong', 3000);
    return browser;
  };
};