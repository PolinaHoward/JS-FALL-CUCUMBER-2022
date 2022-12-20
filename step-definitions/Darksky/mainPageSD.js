const { When , Then} = require("@wdio/cucumber-framework");
const DarkskyPage = require('../../POM/Darksky/DarkskyPage')
const { expect } = require("chai");
const dates = require('../../utils/Dates')
const moment = require("moment/moment");



const darkSkyPage = new DarkskyPage();

When(/^I click temperature dropdown$/, async function (){
await darkSkyPage.clickTemperatureDropdown();
})

Then(/^I click C_mph$/,async function (){
    await darkSkyPage.pickCelMph()
})



When(/^I click language dropdown$/ ,async function (){
    await darkSkyPage.clickLanguageDropdown()
})

Then(/^I click Deutsch$/,async function (){
    await darkSkyPage.pickDeutschLanguage()
})


When(/^I scroll to time machine$/, async function(){
    await browser.pause(2000)
    await darkSkyPage.scrollToTimeMachine()
})

When(/^I click time machine$/, async function(){
    await browser.pause(2000)
    await darkSkyPage.clickTimeMachineButton()
    
})

Then(/^I verify today date is displayed$/,async function(){
      const now = moment();
        const dateValue = now.format('D');
        const currentDateLocator = `//td[@data-day="${dateValue}"]`;
        const classValueFor23 = await $(currentDateLocator).getAttribute('class');
        expect(classValueFor23, '').to.equal("is-today");
        await browser.pause(5000);
    })
