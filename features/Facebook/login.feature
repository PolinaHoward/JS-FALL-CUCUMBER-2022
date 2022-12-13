
# - comment for feature files
@login @regression 
Feature: Login
 
 # you can add the lines in Background section. Gherkins-in the section will run before every scenario
 Background: 
            Given I am on facebook

#@login-1 @imp @smoke
 # Scenario: Verify error for invalid login
 # When I type '123@ff' as username
 # And I type '1234' as password
 # When I click login button
 # Then I verify error is displayed 

#@login-3 
 # Scenario: Verify error for invalid password
 # When I type 'validUser@gmail.com'as username
 # And I type 'incorrectPassword' as password
 # And I click login button
  #Then I verify error is displayed 
  @login-1 @imp @smoke
    Scenario outline: Verify error for invalid <flowName>
    When I type '<username>' as username
    And I type '<password>' as password
    And I click login button
    Then I verify error is displayed 
    Examples:
      | flowName | username           | password         |
      | login    | 123@ff             | 1234             |
      | password |validUser@gmail.com | incorrectPassword|


  @login-2
  Scenario: Verify error for empty login flow
  And I click login button
  Then I verify error is displayed 

      @login-3 @imp
    Scenario: Verify error for empty login flow
        And I verify login "email" is enabled
        And I verify login "password" is enabled
        And I verify login "button" is enabled

 # Scenario: Verify user gets a new page when click Instagram
 # When I click on Instagram
 # Then I verify Instagram opens in a new window 

 # Scenario: Verify user gets a new page when click Oculus
 # When I click on Oculus
 # Then I verify Oculus opens in a new window

 # Scenario: Verify user gets a new page when click Meta Pay
 # When I click on Meta Pay
 # Then I verify Meta Pay opens in a new window

 # Scenario: Verify user gets a new page when click Portal
 # When I click on Portal
 #Then I verify Portal opens in a new window

@login-4 @imp
    Scenario Outline: Verify user gets a new page when click <pageName>
        When I click on <pageName> link
        Then I verify opens in a new window with title "<pageTitle>"
        Examples:
            | pageName  | pageTitle                                               |
            | Instagram | Instagram                                               |
            | Oculus    | Meta Quest VR headsets, accessories and equipment       |
            | Meta Pay  | Meta Pay: Simple, Secure, Free Payments                 |
            | Portal    | Meta Portal – Video calling devices with Alexa built-in |

  # Interview question : How do you handle/write DDT in Cucumber (BDD)?
  # Ans: using Senario Outline with examples 


  # Scenario: Verify user can add payment method - Saving
#     Given user is on Payment page
#     When user clicks add Payment method button
#     And user selects Saving account
#     And user enters account number as 123456789
#     And user enters routing number as 021000021
#     Then user is able to add payment method

# Scenario: Verify user can add payment method - Checking
#     Given user is on Payment page
#     When user clicks add Payment method button
#     And user selects Checking account
#     And user enters account number as 987654321
#     And user enters routing number as 021000022
#     Then user is able to add payment method


#     Scenario Outine: Verify user can add payment method - <accType>
#         Given user is on Payment page
#         When user clicks add Payment method button
#         And user selects <accType> account
#         And user enters account number as <accNumber>
#         And user enters routing number as <accRouting>
#         Then user is able to add payment method
#     Examples:
#         | accType  | accNumber | accRouting |
#         | Saving   | 123456789 | 021000021  |
#         | Checking | 987654321 | 021000022  |



