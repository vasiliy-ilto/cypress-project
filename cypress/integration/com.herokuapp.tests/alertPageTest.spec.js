/// <reference types="cypress" />

const { alertPage } = require("../../support/com.herokuapp.pages/AlertPage");
const { mainPage } = require("../../support/com.herokuapp.pages/MainPage");

describe("Tests on the JavaScript Alerts page", () => {
  beforeEach("Open the Main Page", () => {
    cy.visit("/");
  });

  it("User can click on the [OK] button", () => {
    mainPage.clickAlertPage();
    alertPage.alertClickOnTheOkButton();
    alertPage.textShouldBe("You successfuly clicked an alert");
  });

  it("Confirm: User can click to the [Cancel] button", () => {
    mainPage.clickAlertPage();
    alertPage.confirmClickOnTheCancelButton();
    alertPage.textShouldBe("You clicked: Cancel");
  });

  it("Confirm: User can click to the [OK] button", () => {
    mainPage.clickAlertPage();
    alertPage.confirmClickToTheOkButton();
    alertPage.textShouldBe("You clicked: Ok");
  });

  it("Prompt: User can add a text to the Prompt", () => {
    mainPage.clickAlertPage();
    alertPage.promptEnteredText("Hello World!");
    alertPage.textShouldBe("You entered: Hello World!");
  });

  it("Prompt: User not add any text to the Prompt", () => {
    mainPage.clickAlertPage();
    alertPage.promptEnteredText();
    alertPage.textShouldBe("You entered: undefined");
  });
});
