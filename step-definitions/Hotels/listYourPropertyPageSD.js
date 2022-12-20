const { When , Then} = require("@wdio/cucumber-framework");
const ListYourProperty = require('../../POM/Hotels/ListYourProperty')


const listYourProperty = new ListYourProperty();

//test3
 
 When(/^I click lodging$/,async function(){
     await listYourProperty.clickLodgingButton()
     await browser.pause(2000)
 })
 
  When(/^I type '(.*)' in enter address$/,async function(address){
     await browser.pause(2000)
  await listYourProperty.enterAddress('124 55th Ave E, Fife, WA, USA')
  await browser.pause(5000)
 })
 
 When(/^I click address$/,async function(){
     await listYourProperty.click12455thAveEAddress()
     await browser.pause(2000)
 })

 Then(/^I verify opens in a new window$/, async function () {
    this.totalWindowsAfterClick = await listYourProperty.getCurrentWindowsCount();
    expect(this.totalWindowsBeforeClick + 1, 'Number of windows are not as expected').to.equal(this.totalWindowsAfterClick);
});

When(/^I click next button$/,async function(){
    await listYourProperty.clickNextButton()
    await browser.pause(2000)
})
