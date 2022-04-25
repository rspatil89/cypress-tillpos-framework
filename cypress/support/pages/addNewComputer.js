export const pageTitle = () => cy.get('[id=main]').find('h1');
export const computerName = () => cy.get('[id=name]');
export const computerIntroduced = () => cy.get('[id=introduced]');
export const computerDiscontinued = () => cy.get('[id=discontinued]');
export const computerCompany = () => cy.get('[id=company]');
export const createComputer = () => cy.get('[class="btn primary"]');
export const cancelButton = () => cy.get('[class=btn]');
