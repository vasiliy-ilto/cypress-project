/// <reference types="cypress" />

const {
  downloadFilePage,
} = require("../../support/com.herokuapp.pages/DownloadFilePage");
const { mainPage } = require("../../support/com.herokuapp.pages/MainPage");

describe("Download File Page Test:", () => {
  beforeEach("Open Main Page", () => {
    cy.visit("/");
  });

  it("User can download file successfully", () => {
    mainPage.clickDownloadFilePage();
    downloadFilePage.downloadFile("https://the-internet.herokuapp.com/download/Space.jpg");
    downloadFilePage.downloadedFile().should('exist');
  });
});
