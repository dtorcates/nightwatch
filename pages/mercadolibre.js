module.exports = function (browser) {
 
  this.goToPage = function() {
    browser
      //.windowMaximize()
      .url('https://registration.mercadolibre.com.ve/registration/')
      .waitForElementVisible('body', 1000);
    return browser;
  };

  this.navigatePageRegister = function() {
    browser
      .assert.title('Regístrate en MercadoLibre')
      .assert.containsText('.row-title > h4', 'Regístrate');
    return browser;
  };
  
  this.validateForm = function() {
    browser
      .submitForm('#signup')
      .assert.containsText('.ch-validation-message', 'Completa este dato.');
    return browser;
  };

 

   this.validateNameForm = function() {
    browser
       .setValue('#signupFirstName', '')
       .setValue('#signupLastName', 'Test')
       .setValue('#signupEmail', 'Robot_Testdroid@test.com')
       .setValue('#signupRepEmail', 'Robot_Testdroid@test.com')
       .setValue('#signupPhoneNumber','0212 3234556')
       .setValue('#signupIDNumber','32345568')
       .setValue('#signupPassword','3234556')
       .submitForm('#signup')
       .assert.containsText('.ch-validation-message', 'Completa este dato.');
    return browser;
  };



   this.validateLastNameForm = function() {
    browser
       .url('https://registration.mercadolibre.com.ve/registration/')
       .setValue('#signupFirstName', 'Robot')
       .setValue('#signupLastName', '')
       .setValue('#signupEmail', 'Robot_Testdroid@test.com')
       .setValue('#signupRepEmail', 'Robot_Testdroid@test.com')
       .setValue('#signupPhoneNumber','0212 3234556')
       .setValue('#signupIDNumber','32345568')
       .setValue('#signupPassword','3234556')
       .submitForm('#signup')
       .assert.containsText('.ch-validation-message.ch-hide', 'Completa este dato.');
    return browser;
  };    

   this.validatesignupEmailForm = function() {
    browser
       .setValue('#signupFirstName', 'Robot')
       .setValue('#signupLastName', 'Robot_Testdroid')
       .setValue('#signupEmail', '')
       .setValue('#signupRepEmail', 'Robot_Testdroid@test.com')
       .setValue('#signupPhoneNumber','0212 3234556')
       .setValue('#signupIDNumber','32345568')
       .setValue('#signupPassword','3234556')
       .submitForm('#signup')
       .assert.containsText('.ch-validation-message.ch-hide', 'Completa este dato.');
    return browser;
  };    

   this.fillForm = function() {
    browser
       .setValue('#signupFirstName', 'Robot')
       .setValue('#signupLastName', 'Test')
       .setValue('#signupEmail', 'Robot_Testdroid@test.com')
       .setValue('#signupRepEmail', 'Robot_Testdroid@test.com')
       .setValue('#signupPhoneNumber','0212 3234556')
       .setValue('#signupIDNumber','32345568')
       .setValue('#signupPassword','3234556')
      .submitForm('#signup')
    return browser;
  };
};