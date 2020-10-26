/// <reference types="cypress" />

// import loginPageLocators from "../com.herokuapp.locators/loginPageLocators";
const cssLocator = require("../com.herokuapp.locators/loginPageLocators");

export class LoginPage {
  enterUsername(username) {
    cy.get(cssLocator.usernameField).type(username);
  }

  enterPassword(password) {
    cy.get(cssLocator.passwordField).type(password);
  }

  clickLoginButton() {
    cy.get(cssLocator.loginButton).click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  shouldHaveText(expectedText) {
    cy.get(cssLocator.errorBaner).should("contain.text", expectedText);
  }
}

export const loginPage = new LoginPage();
