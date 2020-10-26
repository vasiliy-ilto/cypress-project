/// <reference types="cypress" />

const {
  fileUploadPage,
} = require("../../support/com.herokuapp.pages/FileUploadPage");
const { mainPage } = require("../../support/com.herokuapp.pages/MainPage");

describe("File Upload Test:", () => {
  beforeEach("Open the Main Page", () => {
    cy.visit("/");
  });

  it("User can upload file successfully", () => {
    mainPage.clickFileUploadPage();
    fileUploadPage.fileToBeUpload("Space.jpg");
    fileUploadPage.uploadedFile().should("exist");
  });
});
