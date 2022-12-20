
const { When , Then} = require("@wdio/cucumber-framework");
const HomePage = require('../../POM/Hotels/HomePage')
const ListYourProperty = require('../../POM/Hotels/ListYourProperty')
const LoginPage = require('../../POM/Facebook/LoginPage');
//const { expect } = require("chai");

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



 When(/^I click on travelers field$/,async function(){
 await homePage.clickTravelersField()
 await browser.pause(2000)

 })


 //test

When(/^I select number of adults in Room 1 as 1$/,async function(){
await homePage.clickTravelersField()
await browser.pause(2000)
})

When(/^I am on hotels$/, async function(){
    await browser.url('https://www.hotels.com');
})






 






