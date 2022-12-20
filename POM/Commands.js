class Commands {




    /**
     * 
        setValue
        getText
        cilck
        $
        $$
        getAttribute
        isDisplayed
        isEnabled
        isSelected
        selectByVisibleText
        selectByAttribute
        selectByIndex
    
     */
    
        /**
         * Generic function to find webElement
         * input: string(locator)
         */
        async findWebElement(locator) {
            await $(locator).waitForDisplayed({
                timeout: 120000,
                timeoutMsg: 'WebElement is not displayed'
            })
            return await $(locator);
        }
    
        /**
         * Generic function to find webElements
         * input: string(locator)
         */
        async findAllWebElement(locator) {
            return await $$(locator);
        }
    
        /**
         * Generic function to enter data in a WebElement
         * name: typeInWebElement
         * input: string(dataToEnter), string(locator)
         */
        async typeInWebElement(locator, dataToEnter) {
            /*
                1. find the webElement
                2. if found, type in it
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            await $(locator).waitForEnabled({
                timeout:120000,
                timeoutMsg: 'Element is not enabled'
            });
            await $(locator).setValue(dataToEnter);
        }
    
        /**
         * Generic function to click a WebElement
         * name: clickWebElement
         * input: string(locator)
         */
        async clickWebElement(locator) {
            await $(locator).waitForClickable({
                timeout:120000,
                timeoutMsg : 'Elemeent is not clickable'
               })
            await $(locator).click();
        }
    
        /**
         * Generic function to find if field is enabled
         * name: isWebElementEnabled
         * input: string(locator)
         */
        async isWebElementEnabled(locator) {
            /*
                1. find the webElement
                2. if found, check if element is enabled
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
            return await $(locator).isEnabled();
        }
    
        /**
         * Generic function to get Text of a WebElement
         * name: getTextOfWebElement
         * input: string(locator)
         */
        async getTextOfWebElement(locator) {
            /*
                1. find the webElement
                2. if found, return Text
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
           await $(locator).waitForDisplayed({
            timeout:120000,
            timeoutMsg : 'Elemeent is not disaplayed'
           })
            return await $(locator).getText();
        }
    
        /**
         * Generic function to get Attribute value of a WebElement
         * name: getAttributeWebElement
         * input: string(locator), string(attrName)
         */
        async getAttributeWebElement(locator, attrName) {
            /*
                1. find the webElement
                2. if found, return attribute value
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
                await (await $(locator)).waitForExist({
                    timeout:120000,
                    timeoutMsg : 'Elemeent is not exist'
                   })
            return await $(locator).getAttribute(attrName);
        }
    
        /**
         * Generic function to select data in dropdown (using Visible text)
         * name: selectDataInDropdown
         * input: locatorDropdown, valueWantToSelect
         */
        async selectDataInDropdown(locator, dataToSelect) {
            await $(locator).waitForDisplayed({
                timeout:120000,
                timeoutMsg : 'Element is not displayed'
               })
            const dropdown = await $(locator);
            dropdown.selectByVisibleText(dataToSelect);
        }
    
        /**
         * Generic function to move mouse on any web-Element
         * name: moveMouseOn
         * input: locator
         */
        async moveMouseOn(locator) {
            await (await $(locator)).waitForExist({
                timeout:120000,
                timeoutMsg : 'Element is not exist'
               })
            await $(locator).moveTo();
        }
    
        /**
         * Generic function to get window handle
         * name: getHandle
         * 
         */  
        async getHandle() {
            return await browser.getWindowHandle();
        }
    
        /**
         * Generic function to get ALL window handle
         * name: getHandles
         * 
         */  
        async getHandles() {
            return await browser.getWindowHandles();
        }
    
        /**
         * Generic function to switch to a new handle
         * name: switchToWindowHandle
         * input: newHandle
         * 
         */  
        async switchToWindowHandle(newHandle) {
            return await browser.switchToWindow(newHandle);
        }
    
    
        /**
         * Generic function to select value from auto-suggestion using getText
         * name: selectFromAutoSuggestion
         * input: locator (for all suggestions), userLikeToSelect
         */
        async selectFromAutoSuggestion(locator, userLikeToSelect) {
            await browser.waitUntil(async () => {
                const totalSuggestions = await $$(locator);
                return totalSuggestions.length >= 8
            }, {
                timeout: 60000,
                timeoutMsg: 'Number in auto-suggestions are not 8'
            });
    
            const allSuggestions = await $$(locator);
            for (const suggestion of allSuggestions) {
                const webText = await suggestion.getText();
                if (webText.toLowerCase().localeCompare(userLikeToSelect.toLowerCase()) === 0) {
                    await suggestion.click();
                    break;
                }
            }
        }
    
       /**
     * Generic function to select date from calendar using getAttribute
     * name: selectDateInCalendar
     * input: locator (for all dates), dateUserLikesToSelect
     */
    async selectDateInCalendar(locator, dateUserLikesToSelect) {
        await browser.waitUntil( async () => {
          const totalDates = await $$(locator)
          return totalDates.length >= 0
          },{
            timeout:60000,
            timeoutMsg : 'Number of dates in calendar are not more than 1'
          })
          const allDates = await $$(locator)
          
        for (const dateElement of allDates) {
            const dataDayValue = await dateElement.getAttribute('data-day');
            if (dataDayValue.localeCompare(dateUserLikesToSelect) === 0) {
                await dateElement.click();
                break;
            }
        }
    }

    async scrollToWebElement(locator) {
        await $(locator).scrollIntoView()
    }

    



}
module.exports = Commands;