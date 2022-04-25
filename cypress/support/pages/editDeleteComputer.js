export const pageTitle = () => cy.get('[id=main]').find('h1');
export const deleteButton = () => cy.get('[class="btn danger"]');