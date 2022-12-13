const Commands = require('../Commands');

class LoginPage {

    commands = new Commands();

    // Locators for web-Elements on the LoginPage (variables)
    loginEmailLocator = '#email';
    loginPassLocator = '#pass';
    loginButtonLocator = '<button>';
    messengerLinkLocator = '*=Messenger';
    oculusLinkLocator = '=Oculus'
    createNewAccountLocator = '//a[text()="Create New Account" or text()="Create new account"]';
    instagramLinkLocator = '=Instagram';
    portalLinkLocator = '=Portal';
    metaPayLinkLocator= '=Meta Pay'
    
    async enterLoginEmail(userEmail) {
        await this.commands.typeInWebElement(this.loginEmailLocator, userEmail);
    }

    async enterLoginPassword(userPwd) {
        await this.commands.typeInWebElement(this.loginPassLocator, userPwd);
    }

    async clickLoginInButton() {
        await this.commands.clickWebElement(this.loginButtonLocator);
    }
     
    async clickMessengerLink(){
        await this.commands.clickWebElement(this.messengerLinkLocator)
    }

    async clickCreateNewAccountButton() {
        await this.commands.clickWebElement(this.createNewAccountLocator);
    }

    async clickOculusLink(){
        await this.commands.clickWebElement(this.oculusLinkLocator)
    }

    async clickInstagramLink() {
        await this.commands.clickWebElement(this.instagramLinkLocator);
    }

    async clickPortalLink() {
        await this.commands.clickWebElement(this.portalLinkLocator);
    }

    async clickPortalLink() {
        await this.commands.clickWebElement(this.portalLinkLocator);
    }

    async clickMetaPayLink() {
        await this.commands.clickWebElement(this.metaPayLinkLocator);
    }

    async isLoginEmailEnabled(){
      return  await this.commands.isWebElementEnabled(this.loginEmailLocator)
    }
    
    async isLoginPasswordEnabled(){
       return await this.commands.isWebElementEnabled(this.loginPassLocator)
     }

    async isLoginButtonEnabled(){
        return await this.commands.isWebElementEnabled(this.loginButtonLocator)
    }




}
module.exports = LoginPage;