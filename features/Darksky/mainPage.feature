

Feature: Main page tests

 Background: 
            Given I am on darksky
@darksky-1
Scenario: Verify if you can pick C,mph in temperature locator
 When I click temperature dropdown
 Then I click C_mph


@darksky-2
 Scenario: Verify if you can pick Deutsch language in language dropdown
 When I click language dropdown
 Then I click Deutsch


 @darksky-3
 Scenario: Verify if today date is picked in time machine calendar (using scroll)
 When I scroll to time machine
 When I click time machine
 Then I verify today date is displayed





