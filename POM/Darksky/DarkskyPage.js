const Commands = require('../Commands');
const dates = require('../../utils/Dates')

class DarkskyPage{

commands= new Commands();
//locators
languagesDropdown = '//div[@id="header"]//div[contains(@class,"selectric-language")]//b'
deutschLanguageDropDown ='//div[contains(@class, "selectric-open")]//li[starts-with(text(), "Deutsch")]'
temperatureDropdown = '//div[@id="header"]//div[contains(@class,"selectric-units")]//b'
degCelMphLocator = '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "mph")]'


timeMachineButton = '//div[@id="timeMachine"]//a'
allDatesInCalendar = '//td[@data-day]'



//functions:
async clickLanguageDropdown() {
    await this.commands.clickWebElement(this.languagesDropdown)
}

async clickTemperatureDropdown(){
    await this.commands.clickWebElement(this.temperatureDropdown)
}

async pickCelMph() {
    await this.commands.clickWebElement(this.degCelMphLocator)
}

async pickDeutschLanguage() {
    await this.commands.clickWebElement(this.deutschLanguageDropDown)
}

async scrollToTimeMachine() {
    await this.commands.scrollToWebElement(this.timeMachineButton)
}
async clickTimeMachineButton(){
    await this.commands.clickWebElement(this.timeMachineButton)
}





















}

module.exports = DarkskyPage;

