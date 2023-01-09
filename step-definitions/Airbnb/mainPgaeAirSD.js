const { When , Then} = require("@wdio/cucumber-framework");
const mainPageAIR = require('../../POM/Airbnb/mainPageAIR')
const { expect } = require("chai");

const mainpageAIR = new mainPageAIR();

When(/^I am on Airbnb page$/,async function(){
    await browser.url('https://www.airbnb.com/')
})

When(/^I click A-frames$/, async function(){

})
