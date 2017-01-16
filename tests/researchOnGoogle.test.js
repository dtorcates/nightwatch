module.exports = {
    'Search on google': function (browser){
        browser
            .init()
            .page.google().fillInSearchInput()
            .page.google().submit() 
            .assert.containsText('#main', browser.globals.movieName)
            .end();
    },


    after: function (browser) {
        browser
        browser.end();
    }
};