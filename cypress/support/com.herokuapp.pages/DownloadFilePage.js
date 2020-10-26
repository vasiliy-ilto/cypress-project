/// <reference types="cypress" />

export class DownloadFilePage {
  downloadFile(fromURL) {
    cy.downloadFile(fromURL, "mydownloads", "example.jpg");
  }

  downloadedFile() {
    return cy.readFile("./mydownloads/example.jpg");
  }
}

export const downloadFilePage = new DownloadFilePage();
