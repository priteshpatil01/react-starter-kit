var myStepDefinitionsWrapper = function() {
  this.Given(/^I am on 'google\.com' homepage$/, function() {
		browser.url('http://google.com');
	});

	this.Then(/^I search for "([^"]*)" in the search box$/, function(searchTerm) {
		browser.setValue('input[name="q"]', searchTerm);
	  browser.keys(['Enter']);
		pending();
	});

	this.Then(/^I see "([^"]*)"$/, function (link) {
	  browser.waitForExist('a=' + link);
	});
};

module.exports = myStepDefinitionsWrapper;
