const Commands = require('../Commands')
class SignUpPage {

commands =new Commands();

//Locators for WebElements for Sign Up pafe
    dayDropdownLocator = '#day';
    monthDropdownLocator = '#month';
    yearDropdownLocator = '#year';

    defaultSelectedInDateLocator = '//select[@id="day"]//option[@selected="1"]';
    defaultSelectedInMonthLocator = '//select[@id="month"]//option[@selected="1"]';
    defaultSelectedInYearLocator = '//select[@id="year"]//option[@selected="1"]';



//Functions for WebElements for Sign Up page
getDefaultSelectedDate() {
    return this.commands.getTextOfWebElement(this.defaultSelectedInDateLocator);
}

getDefaultSelectedMonth() {
    return this.commands.getTextOfWebElement(this.defaultSelectedInMonthLocator);
}

getDefaultSelectedYear() {
    return this.commands.getTextOfWebElement(this.defaultSelectedInYearLocator);
}

selectBirthDate(date){
    this.commands.selectDataInDropdown(this.dayDropdownLocator,date);
}

selectBirthMonth(month) {
    this.commands.selectDataInDropdown(this.monthDropdownLocator, month);
}

selectBirthYear(year) {
    this.commands.selectDataInDropdown(this.yearDropdownLocator, year);
}

selectBirthData(birthDate) {
    /*
        '10 Aug 1998'

        '10' 'Aug' '1998'
    */
   const birthDateArray = birthDate.split(' ');     // '10' , 'Aug' , '1998'
   this.selectBirthDate(birthDateArray[0]);
   this.selectBirthMonth(birthDateArray[1]);
   this.selectBirthYear(birthDateArray[2]);

}


}
module.exports = SignUpPage;