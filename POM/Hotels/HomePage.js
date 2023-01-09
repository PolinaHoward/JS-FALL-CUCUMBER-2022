const Commands = require('../Commands');

class HomePage {

    commands = new Commands();

    // Locators for web-Elements on the HomePage (variables)
    // Destination
    goingToLocator = '//button[@aria-label="Going to"]';
    goingToTypeLocator = '#destination_form_field';
    autoSuggestionsLocator = '//div[@class="truncate"]//strong';

    // Calendar
    calendarOpenLocator = '//div[contains(@class, "uitk-date-picker-menu")]'
    //'#date_form_field-btn'
    //'//div[contains(@class, "uitk-date-picker-menu")]';
    
    allDatesLocator_starts = '//button[starts-with(@aria-label, "'
    allDatesLocator_ends = '")]'

    calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';
    nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    leftSideCalendarHeaderLocator = '(//div[@class="uitk-date-picker-month"])[1]//h2';
    
    disabledDatesLocator = '//button[contains(@aria-label, "disabled")]'

    //List ypur property
    listYourPropertyLink = '//a[@id="listYourProperty"]'

    //Travelers
    travelersFieldLocator='//label[text()="Travelers"]/parent::*'
    adultAmountOfPeople= '//*[@aria-label="Adults "]'
    decreaseAdultCountLocator= '//*[@aria-label="Decrease the number of adults in room 1"]'
    increaseAdultCountLocator='//*[@aria-label="Increase the number of adults in room 1"]'
    decreaseChildCountLocator= '//*[@aria-label="Decrease the number of children in room 1"]'
    increaseChildCountLocator = '//*[@aria-label="Increase the number of children in room 1"]'
    child1Locator ='//select[contains(@name, "selector-0-0")]'
    child2Locator ='//select[contains(@name, "selector-0-1")]'
    child3Locator ='//select[contains(@name, "selector-0-2")]'
    childAmount = '//*[@aria-label="Children Ages 0 to 17"]'
    doneButton='//button[text() = "Done"]'
    totalAmountOfGuests = '//button[contains(text() , "travelers, 1 room")]'


     //Language locators
    languageButton ='//button[@data-stid="button-type-picker-trigger"]'
    languageDropdown = '//select[@id="language-selector"]'
    saveButtonLocator ='//button[text()="Save" or text()="Guardar"]'
    //englishLanguageDropdown = '//select[@id="language-selector"]//option[contains(text() , "English")]'
    //spanishLanguageDropDown = '//select[@id="language-selector"]//option[contains(text() , "Espa")]'


    //Phone number locators
    getTheAppButtonLocator = '//button[@id="submitBtn"]'
    phoneNumberFieldLocator = '//input[@id="phoneNumber"]'
    errorMessagePhoneNumber = '//div[contains(text() , "Please enter")]'

    //Feedback locators
    signInButton = '//button[text() = "Sign in"]'
    feedbackLinkLocator ='//a[contains(text() , "Feedback")]'
    submitButtonLocator = '//button[text() = "Submit"]'
    errorMessageLocator = '//div[@id="validation_header"]//p[contains(text(), "Please fill in")]'
    starBoxRatings = '//fieldset[@id="required_box_page_rating"]'
    allPageRatingButtons = '//input[@name="page-rating"]'
    fourRatingLocator = '//label[@for="page-rating-4"]'
    commentSectionLocator ='//textarea[@id="verbatim"]'
    accomplishYesButton='//label[contains(@for, "successful-yes")]'
    accomplishNoNutton='//label[contains(@for, "successful-no")]'
    thankYouMessageLocator = '//h5[contains(text() , "THANK YOU")]'
    dropdownReturnToHLocator='//select[@id="will-you-return"]'
    //'//select[@id="will-you-return"]'
    dropHighlyLikely='//select[@id="will-you-return"]//option[@value="Highly likely"]'
    yesPriorVisit = '//label[@for="booked-here-before-yes"]'

   //test
   async clickOnLanguageButton(){
    await this.commands.clickWebElement(this.languageButton)
   }

   async clickOnLanguageDropdown(){
    await this.commands.clickWebElement(this.languageDropdown)
   }

   async clickLanguage(language) {
    await this.commands.clickWebElement(`=${language}`);
}


    // functions to interact with the web-Elements on the HomePage
    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.goingToTypeLocator, destination);
    }

    async selectFromSuggestedDestinations(userChoice) {
        await this.commands.selectFromAutoSuggestion(this.autoSuggestionsLocator, userChoice);
    }

    async openCalendar() {
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }

    async selectCheckInDate(date) {
        // date = "December 5 2022"
        // 'December', '5', '2022'
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async selectCheckOutDate(date) {
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async clickDoneOnCalendar() {
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
    }

    async clickToGoToNextCalendar() {
        await this.commands.clickWebElement(this.nextCalendarButtonLocator);
    }

    async clickToGoToPrevCalendar() {
        await this.commands.clickWebElement(this.prevCalendarButtonLocator);
    }

    // 'May 2023'
    async goToMonth(monthYear) {
        /**
         * using leftSideCalendarHeaderLocator get headerElement
         * find text of webElement
         * if (text NOT equal to monthYear) 
         *      click >
         */
        let count = 1;
        while(count<=12) {
            const monthHeader = await this.commands.getTextOfWebElement(this.leftSideCalendarHeaderLocator);
            console.log(`\n monthHeader -> ${monthHeader} \n`);
            if (monthHeader.localeCompare(monthYear) === 0) {
                break;
            }
            await this.commands.clickWebElement(this.nextCalendarButtonLocator);
            await browser.pause(1000);
            count++;
        }
    }

    async clickListYourProperty(){
        await this.commands.clickWebElement(this.listYourPropertyLink)
    }
     
    async clickTravelersField(){
        await this.commands.clickWebElement(this.travelersFieldLocator)
    }

    async changeLanguage(newLanguage){
        await this.commands.clickWebElement(this.languageButton)
        await this.commands.selectDataInDropdown(this.languageDropdown,newLanguage)
        await this.commands.clickWebElement(this.saveButtonLocator)
    }

    async getLanguageFromWeb(){
        return await this.commands.getTextOfWebElement(this.languageButton)
    }

    async scrollToGetTheApp(){
        await this.commands.scrollToWebElement(this.getTheAppButtonLocator)
    }

    async typePhoneNumber(number){
         await this.commands.typeInWebElement(this.phoneNumberFieldLocator, number )
    }

    async clickGetTheApp(){
        await this.commands.clickWebElement(this.getTheAppButtonLocator)
    }
    
    async getErrorMessageText(){
    return await this.commands.getTextOfWebElement(this.errorMessagePhoneNumber)
    }

    async isTheBackButtonDisabled(){
        return await this.commands.isWebElementEnabled(this.prevCalendarButtonLocator)
    }

   /* async changeAdultCountInRoom(roomNum,newCount){
     const adultCountLocator = await this.adultCount + roomNum + this.changeAdult
    }
    */

    async findDisabledDates(){
       return await this.commands.findAllWebElement(this.disabledDatesLocator)
     
    }

    async clickOnSignInButton(){
        await this.commands.clickWebElement(this.signInButton)
    }
    async clickOnFeedbackLink(){
        await this.commands.clickWebElement(this.feedbackLinkLocator)
    }

    async switchToAnotherWindowHandle(){
        const hotWindowHandle = await this.commands.getHandle()
        const allWindowHandles = await this.commands.getHandles()
        for(const handle of allWindowHandles){
            if(handle!== hotWindowHandle){
                await this.commands.switchToWindowHandle(handle)
                break;
            }
        }
    }
    async clickOnSubmitButton(){
        await this.commands.clickWebElement(this.submitButtonLocator)
    }
    
    async getErrorText(){
        return await this.commands.getTextOfWebElement(this.errorMessageLocator)
    }
    
    async isRedBoxDisplayed(){
        return await this.commands.isWebElementDisplayed(this.starBoxRatings)
    }

    async clickOnFourRating(){
        await this.commands.clickWebElement(this.fourRatingLocator)
    }
    
    async clickOnCommentField(){
        await this.commands.clickWebElement(this.commentSectionLocator)
    }

    async enterComment(comment){
        await this.commands.typeInWebElement(this.commentSectionLocator, comment )
   }

   async clickYesPriorVisit(){
    await this.commands.clickWebElement(this.yesPriorVisit)
   }

   async clickAccomplishYes(){
    await this.commands.clickWebElement(this.accomplishYesButton)
   }

   async getThankYouMsg(){
    await browser.pause(2000)
     return await this.commands.getTextOfWebElement(this.thankYouMessageLocator)
   }

   async selectReturnResponse(){
    await this.commands.clickWebElement(this.dropdownReturnToHLocator)
    await browser.pause(2000)
    await this.commands.clickWebElement(this.dropHighlyLikely)
   }

    async selectAmountOfAdults(number){
    
        await this.commands.clickElmentMultTimes(this.increaseAdultCountLocator, number )
    }

     async selectAmoufOfChilds(number){
         await this.commands.clickElmentMultTimes(this.increaseChildCountLocator,number)
     }   

     async selectChild1Age(){
        await this.commands.clickWebElement(this.child1Locator)
        await this.commands.selectDataInDropdown(this.child1Locator ,4)
     }
     async selectChild2Age(){
        await this.commands.clickWebElement(this.child2Locator)
        await this.commands.selectDataInDropdown(this.child2Locator ,'Under 1')
     }
     async selectChild3Age(){
        await this.commands.clickWebElement(this.child3Locator)
        await this.commands.selectDataInDropdown(this.child3Locator ,7)
     }
     async clickDoneInTravelers(){
        await this.commands.clickWebElement(this.doneButton)
     }

     async totalNumber(){
        await this.commands.getTextOfWebElement(this.totalAmountOfGuests)
     }

     async totalSumOfGuests(){
        const adults = await this.commands.getTextOfWebElement(this.adultAmountOfPeople)
        const children = await this.commands.getTextOfWebElement(this.childAmount)
        adults + children
     }


    






    

}


module.exports = HomePage;