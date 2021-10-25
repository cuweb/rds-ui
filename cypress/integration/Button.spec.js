describe('Button', () => {
  const block = `.c-buttoncta`;
  before(() => {
    cy.clearCookies();
    cy.visit(`${Cypress.env('baseUrl')}/`);
  });

  it(`Should render the block`, () => {
    cy.get(block).should('exist');
  });
});
