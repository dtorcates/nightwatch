module.exports = function (browser) {
 var data = browser.globals.variables;
   this.goToPage = function() {
    browser
      .windowMaximize()
      .url('http://toolsqa.com/automation-practice-form/')
      .waitForElementVisible('body', 5000)
      .assert.containsText('#content','Practice Automation Form');
    return browser;
  };

  

   this.inputfields = function() {
     
    browser
      .useCss()
      .waitForElementVisible('body', 5000)
      .assert.containsText('.form-horizontal','PERSONAL INFORMATION')
      //Click Links
      .useXpath()
      .click (".//*[@id='content']/form/fieldset/div[1]/a[1]/strong")
      .back()
      .pause(2000)
      
      .click (".//*[@id='content']/form/fieldset/div[1]/a[2]/strong")
      .back()
      .pause(2000)

      // Input fields with xpatch
      .useCss()
      .waitForElementVisible('input[name=firstname]', 2000)
      .waitForElementVisible('input[name=lastname]', 2000)
      .useXpath()
      .click(".//*[@id='sex-0']")
      .click(".//*[@id='exp-6']")
      .setValue(".//*[@id='datepicker']", data.edate)
     
     // Input fields with css
      .useCss()
      .setValue('input[name=firstname]', data.firstname)
      .setValue('input[name=lastname]', data.lastname)
      .verify.visible('input[id="profession-0"]', 'Checkbox Manual tester is visible')
      .verify.visible('input[id="profession-1"]', 'Checkbox Automate tester is visible')
      .verify.elementPresent('#profession-0')
      .verify.elementNotPresent('#profession-0:checked')
      .click('input[id="profession-0"]')
      .click('input[id="profession-1"]')
      .pause(10000)
      .assert.attributeEquals('#profession-0', 'checked', 'true')

       // Download Links
       .click ('a[href="http://toolsqa.wpengine.com/wp-content/uploads/2014/04/OnlineStore.zip"]')   
      
      //.Automation tool verify Check box
      .verify.visible('input[id="tool-2"]', 'Checkbox webdriver tool is visible')
      .verify.elementNotPresent('#tool-02:checked')
      .click('input[id="tool-2"]')
      .assert.attributeEquals('#tool-2', 'checked', 'true') 
       

      // select drodown list 
      .execute('document.getElementById("continents").options[6].selected=true')
      .keys(browser.Keys.TAB)

      // select box  
      .execute('document.getElementById("selenium_commands").options[2].selected=true')
      .keys(browser.Keys.TAB)

      //Click button
      .click('button[name="submit"]')
      .pause(2000)
      
      // Verify text1 y text2 
      .assert.containsText('#NextedText','Text1')
      .assert.containsText('#NextedText','Text2');

     return browser;

   };


};