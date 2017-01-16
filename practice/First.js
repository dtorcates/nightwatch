/**
 * Sample automated test scenario for Nightwatch.js from
 *  http://g00glen00b.be/e2e-testing-nightwatch-js/
 *  test Page http://todomvc.com/examples/angularjs/#/
 *  it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
  
  'Does not show the task list if there are no tasks': function(client) {
  client
    .url('http://todomvc.com/examples/angularjs/#/')
    .waitForElementVisible('#header h1', 1000)
    .assert.hidden('#main')
    
},

'Does not show the footer if there are no tasks': function(client) {
  client
    .url('http://todomvc.com/examples/angularjs/#/')
    .waitForElementVisible('#header h1', 1000)
    .assert.hidden('#footer')
   
},


'Does initially focus on the input field': function(client) {
  client
    .url('http://todomvc.com/examples/angularjs/#/')
    .waitForElementVisible('#header h1', 1000)
    .assert.elementPresent('#header #new-todo:focus')
  
},

'Shows todo items': function(client) {
  client
    .url('http://todomvc.com/examples/angularjs/#/')
    .waitForElementVisible('#header h1', 1000)
    .setValue('#new-todo', 'My new task')
    .submitForm('#todo-form')
    .assert.containsText('#todo-list li:first-child label', 'My new task')
    .pause(2000)
    .end();
},

'Strikes through completed items': function(client) {
  client
    .url('http://todomvc.com/examples/angularjs/#/')
    .waitForElementVisible('#header h1', 1000)
    .setValue('#new-todo', 'My new task')
    .submitForm('#todo-form')
    .click('#todo-list li:first-child .toggle')
    .assert.cssClassPresent('#todo-list li:first-child', 'completed')
    .pause(2000)
    .end();
},

'Shows how many items there are left': function(client) {
  client
    .url('http://todomvc.com/examples/angularjs/#/')
    .waitForElementVisible('#header h1', 1000)
    .setValue('#new-todo', 'My new task')
    .submitForm('#todo-form')
    .setValue('#new-todo', 'My other new task')
    .submitForm('#todo-form')
    .assert.containsText('#todo-count', '2 items left')
    .click('#todo-list li:first-child .toggle')
    .assert.containsText('#todo-count', '1 item left')
    .pause(2000)
    .end();
},


'Does not add empty or blank tasks': function(client) {
  client
    .url('http://todomvc.com/examples/angularjs/#/')
    .waitForElementVisible('#header h1', 1000)
    .setValue('#new-todo', 'My new task')
    .submitForm('#todo-form')
    .submitForm('#todo-form')
    .setValue('#new-todo', '  ')
    .submitForm('#todo-form')
    .assert.containsText('#todo-count', '1 item left')
    .pause(20000)
    .end();
}

};
