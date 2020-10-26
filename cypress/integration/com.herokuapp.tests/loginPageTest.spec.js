/// <reference types="cypress" />

const { loginPage } = require("../../support/com.herokuapp.pages/LoginPage");
const {
  MainPage,
  mainPage,
} = require("../../support/com.herokuapp.pages/MainPage");
const { secureAreaPage } = require("../../support/com.herokuapp.pages/secureAreaPage");

describe('Tests on the Login page', () => {
  beforeEach('Open the Main Page', () => {
    cy.visit('/');
  });

  it('User can login with valid creds', () => {
    mainPage.clickFormAuthentication();
    loginPage.login('tomsmith', 'SuperSecretPassword!');
    secureAreaPage.urlShouldContain('/secure');
    secureAreaPage.shouldHaveText('You logged into a secure area!');
    
  });

  it('User can logout from the system', () => {
    mainPage.clickFormAuthentication();
    loginPage.login('tomsmith', 'SuperSecretPassword!');
    secureAreaPage.clickLogoutBtn();
    loginPage.shouldHaveText('You logged out of the secure area!')
  });

  it("User can't login with invalid username", () => {
    mainPage.clickFormAuthentication();
    loginPage.enterUsername('invalidUsername');
    loginPage.enterPassword('SuperSecretPassword!');
    loginPage.clickLoginButton();
    loginPage.shouldHaveText('Your username is invalid!');
  });

  it("User can't login with invalid password", () => {
    mainPage.clickFormAuthentication();
    loginPage.enterUsername('tomsmith');
    loginPage.enterPassword('123456');
    loginPage.clickLoginButton();
    loginPage.shouldHaveText('Your password is invalid!');
  });
});
