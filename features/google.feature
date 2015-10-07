Feature: Search on google

	@watch
	Scenario: Search Inform on Google
		Given I go to the DME homepage
		When I search for "inform.com" in the search box
		Then I see "inform.com"
