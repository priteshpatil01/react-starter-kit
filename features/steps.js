var myStepDefinitionsWrapper = function() {

	this.Given(/^I go to the DME homepage$/, function () {
	  browser.url('http://localhost:5000');
	});

	this.Then(/^I search for "([^"]*)" in the search box$/, function(searchTerm) {
		client.waitForExist('.Header');
	});

	this.Then(/^I see "([^"]*)"$/, function (link) {
	  expect(client.getText('.Header-bannerTitle')).toEqual('React');
	});
};

module.exports = myStepDefinitionsWrapper;
