/// <reference types="cypress" />

export class AlertPage {
  alertClickOnTheOkButton() {
    cy.contains("Click for JS Alert").click();
  }

  textOnTheAlertShoudBe(expectedText) {
    cy.on("window:alert", (alertText) => {
      expect(alertText).equal(expectedText);
    });
    cy.contains("Click for JS Alert").click();
  }

  confirmClickToTheOkButton(expectedText) {
    cy.on("window:confirm", () => {
      return true;
    });
    cy.contains("Click for JS Confirm").click();
  }

  confirmClickOnTheCancelButton(expectedText) {
    cy.on("window:confirm", () => {
      return false;
    });
    cy.contains("Click for JS Confirm").click();
  }

  promptEnteredText(userText) {
    let message = userText;
    cy.window().then(($win) => {
      cy.stub($win, "prompt").returns(message);
    });
    cy.contains("Click for JS Prompt").click();
    cy.get("#result").should("have.text", "You entered: " + message);
  }

  textShouldBe(expectedText) {
    cy.get("#result").should("have.text", expectedText);
  }
}

export const alertPage = new AlertPage();
