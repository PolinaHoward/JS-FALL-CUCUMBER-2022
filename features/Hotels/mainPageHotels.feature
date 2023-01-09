

Feature: Main Page Tests Hotels
Background:
 Given I am on hotels


@testHotels-1
Scenario: Pick value from auto-suggestion 
When I type '<word>' in destination
Then I select '<cityName>' from auto-suggestion


@testHotels-2
Scenario: Select dates from calendar
When I open calendar 
When I select '<checkInDate>' as check-in
When I select '<checkOutDate>' as check-out
Then I click done button

@testHotels-4
Scenario: List your own property , lodging, Fife Heights
When I click list your property
When I click lodging
When I type '<address>' in enter address
When I click address
Then I click next button

@testHotels-5
Scenario: Verify if you can pick 3 adults in travelers
When I click on travelers field




 project1

Feature: Code Test
Background:
 Given I am on hotels
    # Score - 40
     @codeTest-1
    Scenario Outline: Verify user is able to change language
        When I change langugage to <languageOption>
        Then I verify language got changed to <language>


        Examples:
            | languageOption           | language |
            | Español (Estados Unidos) | Español  |
            | English (United States)  | English  |



  @codeTest-2
    Scenario: Verify limit for adults count in a room
        Given I am on hotels
        When I select number of adults in Room 1 as 1
        Then I verify the minus button for adults is disabled
        Then I verify the plus button for adults is enabled
        When I select number of adults in Room 1 as 14
        Then I verify the plus button for adults is disabled
        Then I verify the minus button for adults is enabled






           
 main
