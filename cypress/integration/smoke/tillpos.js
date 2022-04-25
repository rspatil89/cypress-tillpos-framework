import * as computerDatabase from '../../support/pages/computerDatabase'
import * as addComputerButton from '../../support/pages/addNewComputer'
import * as editDeleteComputer from '../../support/pages/editDeleteComputer'

describe('Smoke test to verify test application', () => {
    const computerName = `automationTestComputer_${new Date().getTime()}`;

    before('Visit test application page', () => {
        cy.visit('https://computer-database.herokuapp.com/computers');
        cy.get('header').find('a').should('contains.text','Play sample application — Computer database');
    });
    it('Verify visibility all the elements of the test application on landing page',() => {
        computerDatabase.getSearchBox().should('be.visible').invoke('attr','placeholder').should('contain','Filter by computer name...');
        computerDatabase.getSearchButton().should('be.visible').invoke('attr','value').should('contain','Filter by name');
        computerDatabase.table().find('th').find('a').should('contains.text','Computer name').and('contains.text','Introduced').and('contains.text','Discontinued').and('contains.text','Company');
        computerDatabase.paginationPrevButton().should('be.visible').parent().invoke('attr','class').should('contain', 'prev disabled');
        computerDatabase.paginationNextButton().should('be.visible').parent().invoke('attr','class').should('contain','next');
        computerDatabase.addComputerButton().should('be.visible').should('contains.text','Add a new computer');
    });

    it('Verify redirection of add new computer page and all fields of the page',() => {
        computerDatabase.addComputerButton().click();
        addComputerButton.pageTitle().should('contains.text','Add a computer');
        addComputerButton.computerName().should('be.visible').parent().prev().should('contains.text','Computer name');
        addComputerButton.computerIntroduced().should('be.visible').parent().prev().should('contains.text','Introduced date');
        addComputerButton.computerDiscontinued().should('be.visible').parent().prev().should('contains.text','Discontinued date');
        addComputerButton.computerCompany().should('be.visible').parent().prev().should('contains.text','Company');
        addComputerButton.createComputer().should('be.visible').invoke('attr','value').should('contain','Create this computer');
        addComputerButton.cancelButton().should('be.visible').and('contains.text','Cancel');
    });

    it('Verify adding new computer to the list', () => {
        addComputerButton.computerName().type(computerName);
        addComputerButton.createComputer().click();
        computerDatabase.alertMessage().should('contains.text','Computer '+computerName+' has been created');
    });

    it('Verify filtering using search', () => {
        computerDatabase.getSearchBox().type(computerName);
        computerDatabase.getSearchButton().click();
        computerDatabase.table().find('tbody').find('td').find('a').contains(computerName).should('be.visible').click();
    });

    it('Verify deletion of the computer', () => {
        editDeleteComputer.pageTitle().should('contains.text','Edit computer');
        addComputerButton.computerName().invoke('attr','value').should('contain',computerName);
        editDeleteComputer.deleteButton().click();
        computerDatabase.alertMessage().should('contains.text','Computer has been deleted');
    });
});