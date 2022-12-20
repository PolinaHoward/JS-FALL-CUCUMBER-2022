const Commands = require('../Commands')
class ListYourProperty{
    commands = new Commands();

//locators

lodgingButton = '//div[@id="classification_lodging"]'
enterAdressLocator='//input[@placeholder="Enter address..."]'
allAddressLocatorsFor124_55th = '//li[contains(@class, "prediction-item")]'
locator_124_55th = '//ul[@role="menu"]//li[contains(text() , "E, Fife, WA")]'   //'//li[contains(text() , "E, Fife, WA")]'
buttonNext = "//button[@id='locationTypeAheadNextBtn']"


//functions
 async clickLodgingButton(){
    const hotelsHandle = await browser.getWindowHandle();
    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        if (handle !==  hotelsHandle) {
            browser.switchToWindow(handle);
            break;
        }
    }
    this.commands.clickWebElement(this.lodgingButton)
 }

 async enterAddress(address){
 await this.commands.clickWebElement(this.enterAdressLocator)
 await this.commands.typeInWebElement(this.enterAdressLocator, address)
 }

async click12455thAveEAddress(){
   await this.commands.clickWebElement(this.locator_124_55th)
}

async getCurrentWindowsCount() {
    return (await this.commands.getHandles()).length;
}

async waitForNewLinkWindow(numWindowBeforeClick) {
    // waitFor until number of windows/handles is equals to (this.totalWindowsBeforeClick+1)
    await this.commands.waitForNewWindow(numWindowBeforeClick);
   
}

async clickNextButton(){
    await this.commands.clickWebElement(this.buttonNext)
}
}
module.exports = ListYourProperty;