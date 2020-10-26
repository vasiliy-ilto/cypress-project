/// <reference types="cypress" />

export class MainPage {
  clickFormAuthentication() {
    cy.contains("Form Authentication").click();
  }

  clickAlertPage() {
    cy.contains("JavaScript Alerts").click();
  }

  clickFileUploadPage() {
    cy.contains('File Upload').click();
  }

  clickDownloadFilePage() {
    cy.contains('File Download').click();
  }
}

export const mainPage = new MainPage();
