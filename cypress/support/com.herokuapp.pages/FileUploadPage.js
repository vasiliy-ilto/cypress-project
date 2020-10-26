/// <reference types="cypress" />

export class FileUploadPage {
  // the file to be uploaded, from the cypress/fixtures/ directory
  fileToBeUpload(pathToTheFile) {
    const yourFixturePath = pathToTheFile;
    cy.get('#file-upload[type="file"]').attachFile(yourFixturePath);
  }

  uploadedFile() {
    return cy.get('#file-upload[type="file"]');
  }
}

export const fileUploadPage = new FileUploadPage();
