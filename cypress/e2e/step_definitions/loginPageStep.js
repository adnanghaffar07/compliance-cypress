import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require('../../pages/loginPage.json');
import { generateValidName} from '../../support/commands.js';

var name = generateValidName();
Given('I Access the site', () => {    
    cy.visit(Cypress.env("appUrl"));    
}); 

Then('I click on login screen signup button', () => {
    cy.get(loginPage.signUpBtn).should('be.visible').click(); 
})

Then('I click on secure pro signup button', () => {
    cy.get(loginPage.secureProSignupBtn).should('be.visible').click(); 
})

Then('I click on popup no button', () => {
    cy.get(loginPage.signupNoBtn).should('be.visible').click(); 
})

Then(/^I enter organization name "(.*)"$/, (val) => {    
    cy.get(loginPage.organizationNameTxt).should('be.visible').clear().type(val);
})

Then('I click on agree and continue button', () => {
    cy.get(loginPage.agreeAndContinueBtn).should('be.visible').click(); 
})

Then('I click on email signup button', () => {
    cy.get(loginPage.emailSignupBtn).should('be.visible').click(); 
})

Then(/^I enter email "(.*)"$/, (val) => {    
    cy.get(loginPage.emailTxt).should('be.visible').clear().type(name+"+"+val);
})

Then(/^I enter name "(.*)"$/, (val) => {    
    cy.get(loginPage.nameTxt).should('be.visible').clear().type(val);
})

Then(/^I enter password "(.*)"$/, (val) => {    
    cy.get(loginPage.passwordTxt).should('be.visible').clear().type(val);
})

Then('I click on agree and signup button', () => {
    cy.get('span').contains(loginPage.agreeAndSignUpBtn).should('be.visible').click(); 
})

Then('I see verify your email page', () => {
    cy.get('h1').contains(loginPage.verifyYourEmailPage).should('be.visible')
})

Then('logout user', () => {
    cy.visit("https://app-staging.securecompliance.us/auth/sign-up"); 
    cy.get('button').contains(loginPage.logoutBtn).should('be.visible').click(); 
})

Then(/^I enter login email "(.*)"$/, (val) => {    
    cy.get(loginPage.loginEmailTxt).should('be.visible').clear().type(name+"+"+val);
})

Then(/^I enter login password "(.*)"$/, (val) => {    
    cy.get(loginPage.loginPasswordTxt).should('be.visible').clear().type(val);
})

Then('I click on login button', () => {
    cy.get(loginPage.loginBtn).should('be.visible').click(); 
})

Then('I click on next button', () => {
    cy.get("span").contains(loginPage.nextBtn).should('be.visible').click(); 
})

Then('I click on proceed to payment button', () => {
    cy.get("span").contains(loginPage.proceedToPaymentBtn).should('be.visible').click(); 
})

Then(/^I enter card number "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.cardNumberTxt).should('be.visible').clear().type(val);
})

Then(/^I enter card expiry "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.cardExpiryTxt).should('be.visible').clear().type(val);
})

Then(/^I enter card cvc "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.cardCvcTxt).should('be.visible').clear().type(val);
})

Then(/^I enter billing name "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.billingNameTxt).should('be.visible').clear().type(val);
})

Then(/^I enter billing postal code "(.*)"$/, (val) => {    
    cy.switchToSystemIfram().find(loginPage.billingPostalCodeTxt).should('be.visible').clear().type(val);
})

Then('I click on pay button', () => {
    cy.switchToSystemIfram().find(loginPage.payBtn).should('be.visible').click(); 
})

afterEach(() => {
    cy.visit("https://app-staging.securecompliance.us/auth/sign-up"); 
    cy.get('button').contains(loginPage.logoutBtn).should('be.visible').click(); 
    cy.wait(3000)
  });






