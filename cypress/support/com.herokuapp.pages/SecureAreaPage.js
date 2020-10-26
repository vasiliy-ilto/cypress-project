/// <reference types="cypress" />

export class SecureAreaPage {

  shouldHaveText(expectedText){
    cy.get('#flash').should('contain.text', expectedText);
 }
 
 urlShouldContain(linkPath){
  cy.url().should('include', linkPath);
 }

 clickLogoutBtn(){
   cy.contains('Logout').click();
 }
}

export const secureAreaPage = new SecureAreaPage();
