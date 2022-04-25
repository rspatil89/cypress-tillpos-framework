export const getSearchBox = () => cy.get('[id=searchbox]');
export const getSearchButton = () => cy.get('[id=searchsubmit]');
export const table = () => cy.get('table');
export const paginationPrevButton = () => cy.get('[id=pagination]').find('li').find('a').contains('← Previous');
export const paginationNextButton = () => cy.get('[id=pagination]').find('li').find('a').contains('Next →');
export const addComputerButton = () => cy.get('[id=add]');
export const alertMessage = () => cy.get('[class="alert-message warning"]');

