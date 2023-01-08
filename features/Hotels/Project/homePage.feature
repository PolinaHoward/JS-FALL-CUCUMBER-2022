
Feature: Project #1
Background: 
Given I am on hotels

@TC-31
Scenario Outline: Verify language can be changed successfully
When I change language to <languageOption>
Then I verify language got changed to <language>

Examples:
|languageOption          |language|
|Español (Estados Unidos)|Español |
|English (United States) |English | 

@TC-30
Scenario: Verify invalid phone number error
When I scroll to 'Get the app' button
When I type '<phoneNumber>' in Phone number 
When I click 'Get the app' button
Then I verify 'Please enter a valid phone number.' error is displayed

@TC-17
Scenario: Verify past dates and back button on Current month's calendar is disabled
When I click on dates
When I go to current month if not displayed
Then I verify past dates are disabled for current month
Then I verify back button on current month is disabled

@TC-24
Scenario:Verify error is displayed when user submits the empty feedback form
When I click on Sign In
When I click "Feedback"
When I click on Submit button
Then I verify error message is displayed
Then I verify a red dotted box is displayed

@TC-25
Scenario:Verify user can submit feedback after completing the feedback form
When I click on Sign In button
When I click 'Feedback'
When I select 4 star-rating
When I enter <comment> in comments
When I select any option for “How likely are you to return to Hotels.com”
When I select any answer for “Prior to this visit, have you ever booked on Hotels.com”
When I select any answer for ”Did you accomplish what you wanted to do on this page”
When I click on Submit 
Then I verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed

@TC-18
Scenario: Verify user can update number of guests on Home page
When I click on Travelers
When I select Adults as <number>
When I select Children as <Number>
When I select first child age: 4
When I select second child age: Under 1
When I select third child age: 7
When I click Done
Then I verify total number of guests in sum of adults and children as same as selected on step 3 and 4.