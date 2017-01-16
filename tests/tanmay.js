module.exports = {
  'Demo @ tanmaysarkar.com' : function (browser) {
    browser
	  .page.webHome().goToTanmay()
	  .page.webHome().navigateSample01()
	  .page.sample_01().fillForm()
	  .page.sample_01().backhome()
	  .page.webHome().validateheader()
      .end();
  }
};