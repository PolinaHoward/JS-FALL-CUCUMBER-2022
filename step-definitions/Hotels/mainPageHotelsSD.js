
const { When , Then} = require("@wdio/cucumber-framework");
const HomePage = require('../../POM/Hotels/HomePage')
const ListYourProperty = require('../../POM/Hotels/ListYourProperty')
const LoginPage = require('../../POM/Facebook/LoginPage');
const { expect } = require("chai");
const Dates = require("../../utils/Dates");

const dates = new Dates();
const homePage = new HomePage();
const loginPage = new LoginPage();
const listYourProperty = new ListYourProperty();
//test1
When(/^I type '(.*)' in destination$/,async function(word){
    await browser.pause(2000)
 await homePage.enterDestination('New')
})
Then(/^I select '(.*)' from auto-suggestion$/,async function (cityName){
    await browser.pause(2000)
await homePage.selectFromSuggestedDestinations('Manhattan')
})


//test2
When(/^I open calendar$/,async function(){
    await homePage.openCalendar()
})
When(/^I select '(.*)' as check-in$/,async function(checkInDate){
  await browser.pause(2000)
 await homePage.selectCheckInDate('December 20 2022')
   })
When(/^I select '(.*)' as check-out$/,async function(checkOutDate){
    await browser.pause(2000)
    await homePage.selectCheckOutDate('December 25 2022')
})

When(/^I click done button$/,async function(){
 await homePage.clickDoneOnCalendar()
})


When(/^I click list your property$/,async function(){
    await homePage.clickListYourProperty()
    await browser.pause(2000)
 })



 /*When(/^I click on travelers field$/,async function(){
 await homePage.clickTravelersField()
 await browser.pause(2000)

 })
 */


 //test

When(/^I select number of adults in Room 1 as 1$/,async function(){
await homePage.clickTravelersField()
await browser.pause(2000)
})


When(/^I change language to (.+)$/,async function(newLanguageOption){
await homePage.changeLanguage(newLanguageOption)
})

Then(/^I verify language got changed to (.+)$/,async function(expLanguage) {
    const languageOnWeb = await homePage.getLanguageFromWeb()
    expect(languageOnWeb,'Language is not updated as expected').to.equal(expLanguage)

})

When(/^I scroll to 'Get the app' button$/,async function(){
    await homePage.scrollToGetTheApp()
})

When(/^I type '(.*)' in Phone number$/,async function(phoneNumber){
    await browser.pause(2000)
    await homePage.typePhoneNumber('0000000000')
})


When(/^I click 'Get the app' button$/,async function(){
    await homePage.clickGetTheApp()
})

Then(/^I verify 'Please enter a valid phone number.' error is displayed$/,async function(){
    const expErrorMessage = await homePage.getErrorMessageText()
    expect(expErrorMessage, 'Error message is not displayed').to.equal('Please enter a valid phone number.')
    })

When(/^I click on dates$/,async function(){
    await homePage.openCalendar()
    await browser.pause(2000)
})

When(/^I go to current month if not displayed$/,async function(){
    const currentMonthAndYear = await dates.getCurrentMonthAndYear()
    await homePage.goToMonth(currentMonthAndYear)
})

Then(/^I verify back button on current month is disabled$/,async function(){
     await homePage.isTheBackButtonDisabled()
})


Then(/^I verify past dates are disabled for current month$/,async function(){
    const allDis = await homePage.findDisabledDates()
    //console.log(`DISABLED ->>>>> ${allDis}`)
    const currentDate =  await dates.getPreviousDate()
    //const gg = Number(currentDate)
    //console.log(`NOOOOW ->>>>> ${currentDate}`)
    expect(allDis.length.toString(), 'The past dates are enabled').to.equal(currentDate);
   
})

When(/^I click on Sign In$/,async function(){
    await homePage.clickOnSignInButton()
})

When(/^I click "Feedback"$/,async function(){
    await homePage.clickOnFeedbackLink()
})

When(/^I click on Submit button$/,async function(){
    await homePage.switchToAnotherWindowHandle()
    await browser.pause(3000)
    await homePage.clickOnSubmitButton()
})

When(/^I verify error message is displayed$/,async function(){
  const textOfError = await homePage.getErrorText()
  expect(textOfError, 'Message is not displayed').to.be.equal("Please fill in the required information highlighted below.")
})

When(/^I verify a red dotted box is displayed$/,async function(){
    await homePage.isRedBoxDisplayed()
    await browser.pause(2000)
})
When (/^I click on Sign In button$/,async function(){
    await homePage.clickOnSignInButton()
    await browser.pause(2000)
})

When(/^I click 'Feedback'$/,async function(){
    await homePage.clickOnFeedbackLink()
})

When(/^I select 4 star-rating$/,async function(){
    await homePage.switchToAnotherWindowHandle()
    await homePage.clickOnFourRating()
})

When(/^I enter (.+) in comments$/,async function(comment){
    await homePage.clickOnCommentField()
    await homePage.enterComment('Outstanding view')
    await browser.pause(2000)

})

When(/^I select any option for “How likely are you to return to Hotels.com”$/,async function(){
    await homePage.selectReturnResponse()
})

When(/^I select any answer for “Prior to this visit, have you ever booked on Hotels.com”$/,async function(){
    await homePage.clickYesPriorVisit()
})

When(/^I select any answer for ”Did you accomplish what you wanted to do on this page”$/,async function(){
  await homePage.clickAccomplishYes()
})

When(/^I click on Submit$/,async function(){
    await homePage.clickOnSubmitButton()
})

When(/^I verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/,async function(){
   const message = await homePage.getThankYouMsg()
   expect(message, 'Message is not displayed').to.be.equal("THANK YOU FOR YOUR FEEDBACK.")
})

When(/^I click on Travelers$/,async function(){
  await homePage.clickTravelersField()
})

When(/^I select Adults as (.+)$/,async function(number){ //6 adults
  await homePage.selectAmountOfAdults(5)
})

When(/^I select Children as (.+)$/,async function(Number){ //3 chilcdren 
    await homePage.selectAmoufOfChilds(4)
  })

  When(/^I select first child age: 4$/,async function(){
           await homePage.selectChild1Age()
           await browser.pause(2000)
           
  })

  When(/^I select second child age: Under 1$/,async function(){
    await homePage.selectChild2Age()
    await browser.pause(2000)
  })

  When(/^I select third child age: 7$/,async function(){
    await homePage.selectChild3Age()
    await browser.pause(2000)
  })
  
  When(/^I click Done$/,async function(){
   await homePage.clickDoneInTravelers()
   await browser.pause(2000)
  })

  When(/^I verify total number of guests in sum of adults and children as same as selected on step 3 and 4.$/,async function(){
   expect(homePage.totalNumber().toString(), 'Not equal').to.be.equal(homePage.totalSumOfGuests().toString())
  })

 



















 






